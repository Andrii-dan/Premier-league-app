import React, { useEffect, useState } from 'react';
import './WinPercentege.scss';

const WinPercentege = ({ clubMatches }) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		setPercentage(() => {
			return (
				(100 / clubMatches.played.total) *
				clubMatches.wins.total
			).toFixed();
		});
	}, [clubMatches]);

	return (
		<div className='col-12'>
			<div>
				<h2 className='win-percentege__title'>Win Percentage</h2>
			</div>
			<div className='col-12 win-percentege__box'>
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
		</div>
	);
};

export default WinPercentege;
