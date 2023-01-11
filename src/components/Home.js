import Menu from './Menu';
import Footer from './Footer';
import ProjectList from './subcomponents/ProjectList';
import { BsArrowBarDown } from 'react-icons/bs';

const Home = () => {
	const smoothScroll = (e) => {
		e.preventDefault();
		const element = document.getElementById('project-list');
		element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='App'>
			<div className='bar'>
				<Menu />
			</div>

			<div id='home'>
				<h1>Hello, my name is Stephen.</h1>
				<p>I am a computer science graduate.</p>

				<button onClick={smoothScroll} id='arrow-button'>
					<BsArrowBarDown />
				</button>
				<ProjectList />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
