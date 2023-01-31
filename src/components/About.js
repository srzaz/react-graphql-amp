import { projects } from '../data/projects';
import Menu from './Menu';
import Footer from './Footer';
import pfp from '../data/Stephen.jpg';
import { BsArrowBarRight } from 'react-icons/bs';

const About = () => {
	return (
		<div>
			<div className='App'>
				<div className='bar'>
					<Menu />
				</div>
				<div id='home'>
					<div id='about-list'>
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
				<div class='flex flex-row '>
					<div class='basis-full'>
						<p>
							Contact me here:{' '}
							<a href='mailto:srz2@humboldt.edu?subject = Feedback&body = Message'>
								srz2@humboldt.edu
							</a>{' '}
						</p>
						<a href='../data/SZazuetaResume.pdf' download>
							<p
								style={{
									fontSize: '25px',
									textAlign: 'center',
									textDecoration: 'underline',
								}}
							>
								Resume
							</p>
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
