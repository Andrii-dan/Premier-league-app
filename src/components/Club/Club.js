import React, { useState, useEffect } from 'react';
import './Club.scss';
import ClubSquad from './ClubSquad';
// import ClubStat from './ClubStat/ClubStat';
import LastFixtures from './LastFixtures';
import NextFixture from './NextFixture';
// import ClubStanding from '../Standing/ClubStanding';
// import WinPercentege from './WinPercentege';
import Loading from '../BaseComponents/Loading';
import db from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const Club = ({ clubId }) => {
	// const todaysDate = new Date().toISOString().slice(0, 10);
	const [clubInfo, setClubInfo] = useState(false);

	useEffect(() => {
		onSnapshot(doc(db, 'season_22_23', 'K8H74IHjWeLk9lObxABX'), (doc) => {
			setClubInfo(
				doc.data().clubs.find((el) => {
					return el.id === clubId;
				})
			);
		});
	}, [clubId]);

	console.log(clubInfo);

	if (!clubInfo) {
		return <Loading />;
	} else {
		return (
			<>
				<div className='col-12 club__page'>
					<img
						className='club__page-logo'
						src={clubInfo.logo}
						alt={`${clubInfo.name} logo`}
					/>{' '}
					<h1 className='club__page-title'>{clubInfo.name}</h1>
				</div>
				<ClubSquad clubInfo={clubInfo.players} />
				<div className='col-6'>
					<NextFixture clubId={clubId} />
					<LastFixtures clubId={clubId} />
					{/* <ClubStat clubInfo={clubInfo} /> */}
				</div>
				<div className='col-3'>
					{/* <WinPercentege clubMatches={clubInfo.fixtures} /> */}
					{/* <ClubStanding clubId={clubId} /> */}
				</div>
			</>
		);
	}
};

export default Club;
