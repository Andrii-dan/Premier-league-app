import React, { useState, useEffect } from 'react';
import './AllScorers.scss';
import Standing from '../Standing/Standing';
import Loading from '../BaseComponents/Loading';

const AllAssistants = () => {
	const [assists, setAssists] = useState(false);

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2021',
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
					'X-RapidAPI-Key': process.env.REACT_APP_API_FOOTBALL_KEY,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setAssists(res.response))
			.catch((err) => console.error(err));
	}, []);

	if (!assists) {
		return <Loading />;
	} else {
		return (
			<>
				<div className='col-9 all-scorers__container'>
					<ul className='all-scorers'>
						<li className='all-scorers-title'>
							<span className='scorer__rank'></span>
							<span className='scorer__photo'></span>
							<span className='scorer__name'></span>
							<span className='scorer__appearences'>Appearences</span>
							<span className='scorer__minutes'>Minutes</span>
							<span className='scorer__penalty'>Key Passes</span>
							<span className='scorer__scored'>Assists</span>
						</li>
						{assists.map((el, index) => {
							return (
								<li key={index} className='col-12 scorer'>
									<span className='scorer__rank'>{index + 1}</span>
									<span className='scorer__photo'>
										<img
											src={el.player.photo}
											alt={`${el.player.name}'s photo`}
										/>
									</span>
									<span className='scorer__name'>
										<h3>{el.player.name}</h3>
										<h4>{el.statistics[0].team.name}</h4>
									</span>

									<span className='scorer__appearences'>
										{el.statistics[0].games.appearences}
									</span>
									<span className='scorer__minutes'>
										{el.statistics[0].games.minutes}
									</span>
									<span className='scorer__penalty'>
										{el.statistics[0].passes.key}
									</span>
									<span className='scorer__scored'>
										{el.statistics[0].goals.assists}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
				<Standing />
			</>
		);
	}
};

export default AllAssistants;
