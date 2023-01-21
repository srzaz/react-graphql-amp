import { projects } from '../data/projects';
import Menu from './Menu';
import Footer from './Footer';
import pfp from '../data/Stephen.jpg';

const About = () => {
	return (
		<div>
			<div className='App'>
				<div className='bar'>
					<Menu />
				</div>
				<div id='home'>
					<div id='project-list'>
						<div className='about'>
							<div className='about-text'>
								<p style={{ fontSize: '45px', fontWeight: '500' }}>
									My name is Stephen Zazueta.
								</p>
								<p style={{ fontSize: '25px' }}>
									I focus mainly on full stack development within Javascript,
									but I am always expanding my skill set. I am currently
									improving my Python development and working on mobile
									application development as well.
								</p>
							</div>
							<div className='about-img'>
								<img
									src={pfp}
									alt='pfp'
									style={{
										width: '60%',
										borderRadius: '50%',
										filter: 'drop-shadow(0 0 0.75rem black)',
										border: '1px solid black',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
