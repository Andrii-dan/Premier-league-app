import React from 'react';
import './App.scss';
import Header from './components/BaseComponents/Header';
import Content from './components/BaseComponents/Content';
import Footer from './components/BaseComponents/Footer';
import Fixtures from './components/Fixtures/Fixtures';
// import Standing from './components/Standing';

function App() {
	return (
		<div>
			<Header />
			<Content>
				<Fixtures />
				{/* <Standing /> */}
			</Content>
			<Footer />
		</div>
	);
}

export default App;
