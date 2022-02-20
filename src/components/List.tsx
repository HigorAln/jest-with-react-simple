import { useState } from 'react';

interface ListProps {
	initialItems: string[];
}

function List({ initialItems }: ListProps) {
	const [newItem, setNewItem] = useState('');
	const [list, setList] = useState(initialItems);

	function addToList() {
		setList(state => [...state, 'Novo']);
	}

	function addToListLazy() {
		setTimeout(() => {
			setList(state => [...state, newItem]);
		}, 500);
	}

	function removeItem(item: string) {
		setTimeout(() => {
			setList(state => state.filter(element => element !== item));
		}, 500);
	}

	return (
		<>
			<input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)} />
			<button onClick={addToList}>Adicionar</button>
			<button onClick={addToListLazy}>Adicionar novo item</button>
			<ul>
				{list.map(element => (
					<>
						<li key={element}>{element}</li>
						<button onClick={() => removeItem(element)}>remove</button>
					</>
				))}
			</ul>
		</>
	);
}

export default List;
