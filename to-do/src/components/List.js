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
		<div>
			<ol className='ui ordered list'>
				{groceryItem
					.filter((item) => item.isPurchased === false)
					.map((item) => (
						<li>
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
				<div className='field'>
					<label htmlFor=''>Enter Grocery Item</label>

					<input
						type='text'
						onChange={(e) => setItem(e.target.value)}
						value={item}
					/>
					<input
						type='text'
						onChange={(e) => setUnits(e.target.value)}
						value={units}
					/>
					<input
						type='text'
						onChange={(e) => setQuantity(e.target.value)}
						value={quantity}
					/>
					{/* <input
						type='checkbox'
						onChange={(e) => setPurchase(e.target.checked)}
						value={purchase}
					/> */}
					<button onClick={(e) => addNewItem(e)}>Submit</button>

				</div>
			</div>
		</div>
	);
};

export default List;
