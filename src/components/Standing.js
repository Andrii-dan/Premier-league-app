import './Standing.scss';

const Standing = () => {
	const [standing, setStanding] = useState(false);
	const standingLegend = [
		'Position',
		'Logo',
		'Club',
		'Games Played',
		'Wins',
		'Draws',
		'Loses',
		'Goals For',
		'Goals Against',
		'Goals Diffrence',
		'Points',
		'Form',
		'Position Changing',
	];

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((response) => response.json())
			.then((res) => setStanding(res.response[0].league.standings[0]))
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!standing) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<>
				<table>
					<tbody>
						<tr>
							{standingLegend.map((el, index) => {
								return (
									<td className='table' key={index}>
										{el}
									</td>
								);
							})}
						</tr>
						{standing.map((el, index) => {
							return (
								<tr key={index}>
									<td className='table'>{el.rank}</td>
									<td className='table'>
										<img
											style={{ width: '50px', height: '50px' }}
											src={el.team.logo}
										/>
									</td>
									<td className='table'>{el.team.name}</td>
									<td className='table'>{el.all.played}</td>
									<td className='table'>{el.all.win}</td>
									<td className='table'>{el.all.draw}</td>
									<td className='table'>{el.all.lose}</td>
									<td className='table'>{el.all.goals.for}</td>
									<td className='table'>{el.all.goals.against}</td>
									<td className='table'>{el.goalsDiff}</td>
									<td className='table'>{el.points}</td>
									<td className='table'>{el.form}</td>
									<td className='table'>{el.status}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
};

export default Standing;
