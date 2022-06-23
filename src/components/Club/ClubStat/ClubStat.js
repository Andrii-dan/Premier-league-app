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
					firstStat={clubInfo.games.played.total}
					secondStat={clubInfo.games.played.home}
					thirdStat={clubInfo.games.played.away}
				/>

				<SingleStatContainer
					containerTitle={'Total'}
					firstTitle={'Wins'}
					secondTitle={'Draws'}
					thirdTitle={'Loses'}
					firstStat={clubInfo.games.win.total}
					secondStat={clubInfo.games.draw.total}
					thirdStat={clubInfo.games.lose.total}
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
					firstStat={clubInfo.goals.for.total}
					secondStat={clubInfo.goals.against.total}
					thirdStat={clubInfo.goals.for.total - clubInfo.goals.against.total}
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
					firstStat={clubInfo.cleanSheet.total}
					secondStat={clubInfo.cleanSheet.home}
					thirdStat={clubInfo.cleanSheet.away}
				/>
			</div>
		</>
	);
};

export default ClubStat;
