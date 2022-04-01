import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const [hamMenuClass, setHamMenuClass] = useState('hide');
	const [isToggleOn, setIsToggleOn] = useState(true);
	let navigate = useNavigate();
	
	const handleClick = () => {
		setIsToggleOn((prev) => {
			return prev ? (prev = false) : (prev = true);
		});
		setHamMenuClass((prev) => {
			return prev === 'show' ? (prev = 'hide') : (prev = 'show');
		});
	};
	return (
		<header className='nav-bar-section'>
			<span
				onClick={() => {
					navigate('/');
				}}
				className='logo'
			>
				{' '}
				Premier{' '}
				<img
					src='logo.png'
					alt='logo'
					style={{ width: '35px', height: '35px' }}
				/>{' '}
				League
				{/* App */}
			</span>

			<a onClick={handleClick}>
				{isToggleOn ? (
					<i className='fas fa-bars'></i>
				) : (
					<i className='fas fa-times'></i>
				)}
			</a>
			<nav className={hamMenuClass}>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Fixtures</a>
					</li>
					<li>
						<a href='/'>Table</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
