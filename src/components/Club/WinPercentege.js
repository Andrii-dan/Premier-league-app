import React, { useEffect, useState } from 'react';
import './WinPercentege.scss';

const WinPercentege = ({ clubMatches }) => {
	const [percentage, setPercentage] = useState(0);
	const [homePercentage, setHomePercentage] = useState(0);
	const [awayPercentage, setAwayPercentage] = useState(0);

	useEffect(() => {
		setPercentage(() => {
			return (
				(100 / clubMatches.played.total) *
				clubMatches.wins.total
			).toFixed();
		});
		setHomePercentage(() => {
			return (
				(100 / clubMatches.played.home) *
				clubMatches.wins.home
			).toFixed();
		});
		setAwayPercentage(() => {
			return (
				(100 / clubMatches.played.away) *
				clubMatches.wins.away
			).toFixed();
		});
	}, [clubMatches]);

	return (
		<div className='col-12'>
			<div>
				<h2 className='win-percentage__title'>Win Percentage</h2>
			</div>

			<div className='col-12 win-percentage__box'>
				<div className='percentage-box'>
					<span className='percentage-box-title'>Total</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{percentage}%
					</span>
				</div>
				<div className='percentage-box'>
					<span className='percentage-box-title'>Home</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{homePercentage}%
					</span>
				</div>
				<div className='percentage-box'>
					<span className='percentage-box-title'>Away</span>
					<span
						className={
							percentage >= 65
								? 'high'
								: percentage >= 50
								? 'normal'
								: percentage >= 30
								? 'low'
								: 'very-low'
						}
					>
						{awayPercentage}%
					</span>
				</div>
			</div>
		</div>
	);
};

export default WinPercentege;
