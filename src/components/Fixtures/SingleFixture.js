import React from 'react';
import './SingleFixture.scss';

const SingleFixture = ({ matchData }) => {
	return (
		<div className={'col-12 fixture'}>
			<span className='team home'>{matchData.home.name}</span>
			<span className='club-logo'>
				<img
					style={{ width: '25px', height: '25px' }}
					src={matchData.home.logo}
					alt={`${matchData.home.name} logo`}
				/>
			</span>
			<span className='score'>
				{matchData.goals.home === null
					? matchData.fixture.date.slice(11, 16)
					: `${matchData.goals.home} : ${matchData.goals.away}`}
			</span>
			<span className='club-logo'>
				<img
					style={{ width: '25px', height: '25px' }}
					src={matchData.away.logo}
					alt={`${matchData.away.name} logo`}
				/>
			</span>
			<span className='team away'>{matchData.away.name}</span>
		</div>
	);
};

export default SingleFixture;
