import React, { useState } from 'react';

const List = () => {
	const [groceryItem, setGroceryItem] = useState([
		{
			item: 'Shrimp',
			units: '',
			quantity: 0,
			isPurchased: false,
		},
		{
			item: 'Cheese',
			units: '',
			quantity: 0,
			isPurchased: false,
		},
		{
			item: 'Rice',
			units: '',
			quantity: 0,
			isPurchased: false,
		},
	]);
	const [item, setItem] = useState('');
	const [units, setUnits] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [purchase, setPurchase] = useState(false);

	const addNewItem = (e) => {
		e.preventDefault();
		groceryItem.push({ item, units, quantity, isPurchased: purchase });
		setGroceryItem([...groceryItem]);
		//the spread operator was used because the reference of grocery item and the reference of grocery item before was the same so to force a new render we created a new array(reference).
		setItem('');
		setUnits('');
		setQuantity(0);
		setPurchase(false);
		// lines 34- 37 are setting the value of the input to the default values soooo the inputs reset after they are submitted.
	};

	//useUe effect to update state?

	return (
		<div id='center'>
			<h1>Grocery List</h1>

			<ol className='ui ordered list'>
				{groceryItem
					.filter((item) => item.isPurchased === false)
					.map((item) => (
						<li key={groceryItem.item}>
							Item: {item.item} purchased:
							<input
								type='checkbox'
								onChange={(e) =>
									(item.isPurchased = true && setGroceryItem([...groceryItem]))
								}
							/>{' '}
							<br />
							Units: {item.units} <br />
							Quantity: {item.quantity} <br />
						</li>
					))}
			</ol>
			<div className='ui form'>
				<div className='fields'>
					<div className='field'>
						<label>Item</label>
						<input
							type='text'
							placeholder='Item'
							onChange={(e) => setItem(e.target.value)}
							value={item}
						/>
					</div>
					<div className='field'>
						<label>Units</label>
						<input
							type='text'
							placeholder='Units'
							onChange={(e) => setUnits(e.target.value)}
							value={units}
						/>
					</div>
					<div className='field'>
						<label>Quantity</label>
						<input
							type='text'
							placeholder='Quantity'
							onChange={(e) => setQuantity(e.target.value)}
							value={quantity}
						/>
					</div>
					<button className='ui button' onClick={(e) => addNewItem(e)}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default List;

//code with no semantic ui styling
{/* <div className='ui form'>
	<div className='field'>
		<label htmlFor=''>Enter Grocery Item</label>

		<div className='ui input focus'>
			<input
				type='text'
				onChange={(e) => setItem(e.target.value)}
				value={item}
			/>
		</div>
		<div className='ui input focus'>
			<input
				type='text'
				onChange={(e) => setUnits(e.target.value)}
				value={units}
			/>
		</div>
		<div className='ui input focus'>
			<input
				type='text'
				onChange={(e) => setQuantity(e.target.value)}
				value={quantity}
			/>
		</div>
		<button className='ui button' onClick={(e) => addNewItem(e)}>
			Submit
		</button>
	</div>
</div>; */}
