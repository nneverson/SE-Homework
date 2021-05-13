import List from './components/List';
const items = [
	{
		title: 'What is React?',
		content: 'react is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS librabry among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by create components',
	},
];

function App() {
	return (
		<div className='App'>
			{' '}
			<List />
		</div>
	);
}

export default App;
