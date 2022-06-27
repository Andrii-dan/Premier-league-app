import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../BaseComponents/Loading';
import TopScorers from '../TopPlayers/TopScorers';
import db from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import './FullStanding.scss';

const FullStanding = () => {
	const [standing, setStanding] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		onSnapshot(doc(db, 'season_22_23', 'K8H74IHjWeLk9lObxABX'), (doc) => {
			setStanding(doc.data().standing);
		});
	}, []);

	if (!standing) {
		return <Loading />;
	} else {
		return (
			<>
				<div className='col-9 full-standing__container'>
					<ul className='full-standing'>
						<li className='full-standing-title'>
							<span className='club__rank'></span>
							<span className='club__logo'></span>
							<span className='club__name'></span>
							<span className='club__games'>GP</span>
							<span className='club__wins'>Win</span>
							<span className='club__draws'>Draw</span>
							<span className='club__loses'>Lose</span>
							<span className='club__goals-for'>G</span>
							<span className='club__goals-against'>GA</span>
							<span className='club__goals-difference'>GD</span>
							<span className='club__points'>Pts</span>
							<span className='club__form'>Form</span>
							{/* <span className='club__status'></span> */}
						</li>
						{standing.map((el, index) => {
							return (
								<li
									key={index}
									className={
										el.position === 4
											? 'col-12 club ucl-zone'
											: el.position === 17
											? 'col-12 club relegation-zone'
											: 'col-12 club'
									}
									onClick={() => {
										navigate(`/clubs/${el.id}`);
									}}
								>
									<span className='club__rank'>{el.position}</span>
									<span className='club__logo'>
										<img
											style={{ width: '25px', height: '25px' }}
											src={el.logo}
											alt={`${el.name}'s logo`}
										/>
									</span>
									<span className='club__name'>{el.name}</span>
									<span className='club__games'>{el.matches.played}</span>
									<span className='club__wins'>{el.matches.win}</span>
									<span className='club__draws'>{el.matches.draw}</span>
									<span className='club__loses'>{el.matches.lose}</span>
									<span className='club__goals-for'>{el.goals.for}</span>
									<span className='club__goals-against'>
										{el.goals.against}
									</span>
									<span className='club__goals-difference'>
										{parseInt(el.goals.for) - parseInt(el.goals.against)}
									</span>
									<span className='club__points'>{el.points}</span>
									<span className='club__form'>{el.form}</span>
									{/* <span className='club__status'>{el.status}</span> */}
								</li>
							);
						})}
					</ul>
				</div>
				<TopScorers />
			</>
		);
	}
};

export default FullStanding;
