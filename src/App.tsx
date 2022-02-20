import { useState } from 'react';
import List from './components/List';

function App() {
	return (
		<>
			<List initialItems={['Diego', 'Mayk', 'Higor']} />
		</>
	);
}

export default App;
