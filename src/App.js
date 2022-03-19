import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Fixtures from './components/Fixtures/Fixtures';
import Standing from './components/Standing/Standing';

function App() {
	return (
		<>
			<Navbar />
			<Fixtures />
			<Standing />
		</>
	);
}

export default App;
