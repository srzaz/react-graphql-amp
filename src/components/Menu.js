import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Menu = () => {
	return (
		<div className='nav-bar'>
			<img src={logo} alt='logo' width='100px' height='100px' />
			<nav className='nav-menu' style={{ zIndex: '9999' }}>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
		</div>
	);
};

export default Menu;
