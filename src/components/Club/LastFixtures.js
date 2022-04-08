import React, { useEffect, useState } from 'react';
import './LastFixtures.scss';

const LastFixtures = ({ clubId }) => {
	const [lastFixtures, setLastFixtures] = useState(false);
	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	];

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2021&team=${clubId}&last=5`,
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
			.then((data) => setLastFixtures(data.response.reverse()))
			.catch((err) => {
				console.error(err);
			});
	}, [clubId]);

	if (!lastFixtures) {
		return <h2>loading...</h2>;
	} else {
		return (
			<div className='col-12 last-fixtures'>
				<div>
					<h2 className='last-fixtures__title'>Last Fixtures</h2>
				</div>
				<div className='col-12 last-fixtures__container'>
					{lastFixtures.map((el, index) => {
						return (
							<div key={index} className='last-fixtures__info'>
								<span className='last-fixtures__date'>
									{new Date(el.fixture.date).getDate()}/
									{months[new Date(el.fixture.date).getMonth()]}
								</span>
								<img
									className='last-fixtures__logo'
									src={
										el.teams.home.id === clubId
											? el.teams.away.logo
											: el.teams.home.logo
									}
									alt={`${
										el.teams.home.id === clubId
											? el.teams.away.name
											: el.teams.home.name
									} logo`}
								/>
								<span className='last-fixtures__score'>
									{el.goals.home === null
										? el.fixture.date.slice(11, 16)
										: `${el.goals.home} : ${el.goals.away}`}
								</span>
								<span className='last-fixtures__status'>
									<i
										class={`fas fa-circle ${
											el.teams.home.id === clubId && el.teams.home.winner
												? 'win'
												: el.teams.away.id === clubId && el.teams.away.winner
												? 'win'
												: el.goals.home === el.goals.away
												? ''
												: 'lose'
										}`}
									></i>
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

export default LastFixtures;
