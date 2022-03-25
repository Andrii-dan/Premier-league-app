import React from 'react';
import './TopScorers.scss';
import Scorers from './Scorers';
import Assists from './Assists';
import ScorersPlusAssists from './ScorersPlusAssists';

const TopScorers = () => {
	return (
		<div className='col-3'>
			<ul className='col-12'>
				<li>
					<h2 className='scorers__title'>Scorers</h2>
				</li>
				<Scorers />
			</ul>

			<ul className='col-12'>
				<li>
					<h2 className='scorers__title'>Assists</h2>
				</li>
				<Assists />
			</ul>

			<ul className='col-12'>
				<li>
					<h2 className='scorers__title'>Goals & Assists</h2>
				</li>
				<ScorersPlusAssists />
			</ul>
		</div>
	);
};

export default TopScorers;
