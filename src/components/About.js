import { projects } from '../data/projects';
import Menu from './Menu';
import Footer from './Footer';

const About = () => {
	console.log(projects);
	return (
		<div>
			<div className='App'>
				<div className='bar'>
					<Menu />
				</div>
				<div id='home'>
					<h1>Hi, I'm Stephen.</h1>
					<p>I am a computer science graduate.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
