import { BsArrowBarDown } from 'react-icons/bs';

const Header = () => {
	const smoothScroll = (e) => {
		e.preventDefault();
		const element = document.getElementById('home');
		element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div id='home-header'>
			<p style={{ fontSize: '65px', zIndex: '9999' }}>
				Hello, my name is Stephen.
			</p>
			<p style={{ fontSize: '25px', zIndex: '9999' }}>
				I am a computer science graduate.
			</p>
			<button
				onClick={smoothScroll}
				id='arrow-button'
				style={{ zIndex: '9999' }}
			>
				<BsArrowBarDown />
			</button>
		</div>
	);
};

export default Header;
