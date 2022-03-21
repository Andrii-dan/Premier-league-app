import React from 'react';
import './App.scss';
import Header from './components/BaseComponents/Header';
import Content from './components/BaseComponents/Content';
import Footer from './components/BaseComponents/Footer';
import Fixtures from './components/Fixtures/Fixtures';
import Standing from './components/Standing/Standing';

function App() {
	return (
		<div>
			<Header />
			<Content>
				<Standing />
				<Fixtures />
			</Content>
			<Footer />
		</div>
	);
}

export default App;
