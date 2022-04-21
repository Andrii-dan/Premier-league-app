import React, { useState, useEffect } from 'react';
import './Club.scss';
import ClubSquad from './ClubSquad';
import ClubStat from './ClubStat/ClubStat';
import LastFixtures from './LastFixtures';
import NextFixture from './NextFixture';
import ClubStanding from '../Standing/ClubStanding';
import WinPercentege from './WinPercentege';
import Loading from '../BaseComponents/Loading';

const Club = ({ clubId }) => {
	const todaysDate = new Date().toISOString().slice(0, 10);
	const [clubInfo, setClubInfo] = useState(false);

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2021&team=${clubId}&date=${todaysDate}`,
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
					'X-RapidAPI-Key': process.env.REACT_APP_API_FOOTBALL_KEY,
				},
			}
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setClubInfo(data.response))
			.catch((err) => {
				console.error(err);
			});
	}, [clubId]);

	if (!clubInfo) {
		return <Loading />;
	} else {
		return (
			<>
				<div className='col-12 club__page'>
					<img
						className='club__page-logo'
						src={clubInfo.team.logo}
						alt={`${clubInfo.team.name} logo`}
					/>{' '}
					<h1 className='club__page-title'>{clubInfo.team.name}</h1>
				</div>
				<ClubSquad clubId={clubId} />
				<div className='col-6'>
					<NextFixture clubId={clubId} />
					<LastFixtures clubId={clubId} />
					<ClubStat clubInfo={clubInfo} />
				</div>
				<div className='col-3'>
					<WinPercentege clubMatches={clubInfo.fixtures} />
					<ClubStanding clubId={clubId} />
				</div>
			</>
		);
	}
};

export default Club;
