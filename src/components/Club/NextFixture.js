import React, { useEffect, useState } from 'react';
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
					'X-RapidAPI-Key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
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

	console.log(fixture);

	if (!fixture) {
		return <h2>loading...</h2>;
	} else {
		return (
			<ul className='col-12'>
				<li>
					<h2 className='next-fixtures__title'>Next Fixture</h2>
				</li>
				<li className='col-12 next-fixtures__date'>
					<h3 className='next-fixtures__date-info'>
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
