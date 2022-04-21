import React, { useEffect, useState } from 'react';
import Loading from '../BaseComponents/Loading';
import SingleFixture from '../Fixtures/SingleFixture';
import './NextFixture.scss';

const NextFixture = ({ clubId }) => {
	const [fixture, setFixture] = useState(false);
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2021&team=${clubId}&next=1`,
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
			.then((data) => setFixture(data.response[0]))
			.catch((err) => {
				console.error(err);
			});
	}, [clubId]);

	if (!fixture) {
		return <Loading />;
	} else {
		return (
			<ul className='col-12 next-fixture'>
				<li>
					<h2 className='next-fixture__title'>Next Fixture</h2>
				</li>
				<li className='col-12 next-fixture__date'>
					<h3 className='next-fixture__date-info'>
						{days[new Date(fixture.fixture.date).getDay()]}{' '}
						{new Date(fixture.fixture.date).getDate()}{' '}
						{months[new Date(fixture.fixture.date).getMonth()]}
					</h3>
				</li>
				<SingleFixture matchData={fixture} additionalClass={'last-fixture'} />
			</ul>
		);
	}
};

export default NextFixture;
