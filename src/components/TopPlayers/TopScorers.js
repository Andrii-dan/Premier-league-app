import React from 'react';
import './TopScorers.scss';
import Scorers from './Scorers';
import Assists from './Assists';
import ScorersPlusAssists from './ScorersPlusAssists';

const TopScorers = () => {
	return (
		<div className='col-3 top-scorers__container'>
			<ul className='col-12 topscorers__container'>
				<li>
					<h2 className='scorers__title'>Scorers</h2>
				</li>
				<Scorers />
				<li className='see-all__buttons'>
					<button>
						See all <i className="fas fa-arrow-right"></i>
					</button>
				</li>
			</ul>

			<ul className='col-12 topscorers__container'>
				<li>
					<h2 className='scorers__title'>Assists</h2>
				</li>
				<Assists />
				<li className='see-all__buttons'>
					<button>
						See all <i className="fas fa-arrow-right"></i>
					</button>
				</li>
			</ul>

			<ul className='col-12 topscorers__container'>
				<li>
					<h2 className='scorers__title'>Goals & Assists</h2>
				</li>
				<ScorersPlusAssists />
				<li className='see-all__buttons'>
					<button>
						See all <i className="fas fa-arrow-right"></i>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default TopScorers;
