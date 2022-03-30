import React from 'react';
import './SingleFixture.scss';

const SingleFixture = ({ matchData, index, additionalClass }) => {
	return (
		<div key={index} className={`col-12 fixture ${additionalClass}`}>
			<span className='team home'>{matchData.teams.home.name}</span>
			<span className='club-logo'>
				<img
					style={{ width: '25px', height: '25px' }}
					src={matchData.teams.home.logo}
					alt={`${matchData.teams.home.name} logo`}
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
					src={matchData.teams.away.logo}
					alt={`${matchData.teams.away.name} logo`}
				/>
			</span>
			<span className='team away'>{matchData.teams.away.name}</span>
		</div>
	);
};

export default SingleFixture;
