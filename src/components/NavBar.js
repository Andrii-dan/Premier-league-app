import { useState } from 'react';
import './NavBar.scss';

const NavBar = () => {
	const [hamMenuClass, setHamMenuClass] = useState('hide');
	const [isToggleOn, setIsToggleOn] = useState(true);

	const handleClick = () => {
		setIsToggleOn((prev) => {
			return prev ? (prev = false) : (prev = true);
		});
		setHamMenuClass((prev) => {
			return prev === 'show' ? (prev = 'hide') : (prev = 'show');
		});
	};
	return (
		<section className='nav-bar-section'>
			<a href='#' className='logo'>
				Premier League App
			</a>

			<a onClick={handleClick}>
				{isToggleOn ? (
					<i className='fa-solid fa-bars'></i>
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
		</section>
	);
};

export default NavBar;