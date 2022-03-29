import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/BaseComponents/Header';
import Content from './components/BaseComponents/Content';
import Footer from './components/BaseComponents/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import Clubs from './components/Pages/Clubs/Clubs';

function App() {
	return (
		<div className='main__container'>
			<Router>
				<Header />
				<Content>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/clubs/:clubId' element={<Clubs />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Content>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
