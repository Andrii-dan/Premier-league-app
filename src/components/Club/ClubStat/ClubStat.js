import React from 'react';
import './ClubStat.scss';
import SingleStatContainer from './SingleStatContainer';

const ClubStat = ({ clubInfo }) => {
	return (
		<>
			{' '}
			<div className='col-12 club-stat'>
				<div>
					<h2 className='stat__title'>Fixtures</h2>
				</div>
				<SingleStatContainer
					containerTitle={'Played'}
					firstTitle={'Total'}
					secondTitle={'Home'}
					thirdTitle={'Away'}
					firstStat={clubInfo.fixtures.played.total}
					secondStat={clubInfo.fixtures.played.home}
					thirdStat={clubInfo.fixtures.played.away}
				/>

				<SingleStatContainer
					containerTitle={'Total'}
					firstTitle={'Wins'}
					secondTitle={'Draws'}
					thirdTitle={'Loses'}
					firstStat={clubInfo.fixtures.wins.total}
					secondStat={clubInfo.fixtures.draws.total}
					thirdStat={clubInfo.fixtures.loses.total}
				/>
			</div>
			<div className='col-12 club-stat'>
				<div>
					<h2 className='stat__title'>Goals</h2>
				</div>
				<SingleStatContainer
					containerTitle={'Goals Difference'}
					firstTitle={'Scored'}
					secondTitle={'Conceded'}
					thirdTitle={'Difference'}
					firstStat={clubInfo.goals.for.total.total}
					secondStat={clubInfo.goals.against.total.total}
					thirdStat={
						clubInfo.goals.for.total.total - clubInfo.goals.against.total.total
					}
				/>

				<SingleStatContainer
					containerTitle={'Goals Scored Averege per Match'}
					firstTitle={'Total'}
					secondTitle={'Home'}
					thirdTitle={'Away'}
					firstStat={clubInfo.goals.for.average.total}
					secondStat={clubInfo.goals.for.average.home}
					thirdStat={clubInfo.goals.for.average.away}
				/>

				<SingleStatContainer
					containerTitle={'Goals Conceded Averege per Match'}
					firstTitle={'Total'}
					secondTitle={'Home'}
					thirdTitle={'Away'}
					firstStat={clubInfo.goals.against.average.total}
					secondStat={clubInfo.goals.against.average.home}
					thirdStat={clubInfo.goals.against.average.away}
				/>

				<SingleStatContainer
					containerTitle={'Clean Sheet'}
					firstTitle={'Total'}
					secondTitle={'Home'}
					thirdTitle={'Away'}
					firstStat={clubInfo.clean_sheet.total}
					secondStat={clubInfo.clean_sheet.home}
					thirdStat={clubInfo.clean_sheet.away}
				/>
			</div>
		</>
	);
};

export default ClubStat;
