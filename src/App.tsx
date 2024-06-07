import logo from './logo.svg';
import './App.css';

function App() {
	//1
	let man = {
		name: 'John',
		age: 32,
	};

	const copyMan = { ...man };

	//2
	let numbers = [1, 2, 3];

	const copyNumbers = [...numbers];

	//3
	let man1 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
		},
	};

	const copyMan1 = { ...man1, mother: { ...man1.mother } };

	//4
	let man2 = {
		name: 'John',
		age: 28,
		friends: ['Peter', 'Steven', 'William'],
	};

	const coyMan2 = { ...man2, friends: [...man2.friends] };

	//5
	let people = [
		{ name: 'Peter', age: 30 },
		{ name: 'Steven', age: 32 },
		{ name: 'William', age: 28 },
	];

	const copyPeople = people.map(item => ({ ...item }));

	//6
	let man3 = {
		name: 'John',
		age: 28,
		friends: [
			{ name: 'Peter', age: 30 },
			{ name: 'Steven', age: 32 },
			{ name: 'William', age: 28 },
		],
	};

	const copyMan3 = { ...man3, friends: man3.friends.map(item => ({ ...item })) };

	//7
	let man4 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
		},
	};
	const copyMan4 = { ...man4, mother: { ...man4.mother, work: { ...man4.mother.work } } };

	//8
	let man5 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{ name: 'Kevin', age: 80 },
				{ name: 'Jennifer', age: 78 },
			],
		},
	};

	const copyMan5 = {
		...man5,
		mother: { ...man5.mother, work: { ...man5.mother.work }, parents: man5.mother.parents.map(item => ({ ...item })) },
	};

	//9

	let man6 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{
					name: 'Kevin',
					age: 80,
					favoriteDish: {
						title: 'borscht',
					},
				},
				{
					name: 'Jennifer',
					age: 78,
					favoriteDish: {
						title: 'sushi',
					},
				},
			],
		},
	};

	const copyMan6 = {
		...man6,
		mother: {
			...man6.mother,
			work: { ...man6.mother.work },
			parents: man6.mother.parents.map(item => ({ ...item, favoriteDish: { ...item.favoriteDish } })),
		},
	};

	//10

	let man7 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{
					name: 'Kevin',
					age: 80,
					favoriteDish: {
						title: 'borscht',
						ingredients: [
							{ title: 'beet', amount: 3 },
							{ title: 'potatoes', amount: 5 },
							{ title: 'carrot', amount: 1 },
						],
					},
				},
				{
					name: 'Jennifer',
					age: 78,
					favoriteDish: {
						title: 'sushi',
						ingredients: [
							{ title: 'fish', amount: 1 },
							{ title: 'rise', amount: 0.5 },
						],
					},
				},
			],
		},
	};

	const copyMan7 = {
		...man7,
		mother: { ...man7.mother, work: man7.mother.work },
		parents: man7.mother.parents.map(item => ({
			...item,
			favoriteDish: { ...item.favoriteDish, ingredients: item.favoriteDish.ingredients.map(item => item) },
		})),
	};

	console.log('copyMan7', copyMan7);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
