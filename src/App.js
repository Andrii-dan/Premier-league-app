import React from 'react';
import './App.scss';
import Header from './components/BaseComponents/Header';
import Content from './components/BaseComponents/Content';
import Footer from './components/BaseComponents/Footer';
import Fixtures from './components/Fixtures/Fixtures';
import Standing from './components/Standing/Standing';
import TopScorers from './components/TopPlayers/TopScorers';

function App() {
	return (
		<div className='main__container'>
			<Header />
			<Content>
				<Standing />
				<Fixtures />
				<TopScorers />
			</Content>
			<Footer />
		</div>
	);
}

export default App;
