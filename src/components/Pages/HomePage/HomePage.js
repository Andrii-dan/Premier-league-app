import React from 'react';
import Fixtures from '../../Fixtures/Fixtures';
import Standing from '../../Standing/Standing';
import TopScorers from '../../TopPlayers/TopScorers';

const HomePage = () => {
	return (
		<>
			<Standing />
			<Fixtures />
			<TopScorers />
		</>
	);
};

export default HomePage;
