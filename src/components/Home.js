import Menu from './Menu';
import Footer from './Footer';
import Header from './subcomponents/Header';
import ProjectList from './subcomponents/ProjectList';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

const Home = () => {
	const options = {
		fullScreen: { enable: false },
		particles: {
			number: {
				value: 80,
				density: {
					enable: true,
					area: 800,
				},
			},
			color: {
				value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
			},
			shape: {
				type: 'circle',
			},
			opacity: {
				value: 1,
			},
			size: {
				value: { min: 1, max: 8 },
			},
			links: {
				enable: true,
				distance: 150,
				color: '#808080',
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 5,
				direction: 'none',
				random: false,
				straight: false,
				outModes: 'out',
			},
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: 'grab',
				},
				onClick: {
					enable: true,
					mode: 'push',
				},
			},
			modes: {
				grab: {
					distance: 140,
					links: {
						opacity: 1,
					},
				},
				push: {
					quantity: 4,
				},
			},
		},
	};

	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);
	return (
		<div className='App'>
			<div
				style={{
					position: 'absolute',
					top: '0px',
					width: '100%',
					height: '100%',
				}}
			>
				<Particles options={options} init={particlesInit} />
			</div>
			<div className='bar-home'>
				<Menu />
			</div>

			<Header />

			<div id='home'>
				<p style={{ fontSize: '40px', paddingTop: '20px' }}>Projects</p>
				<ProjectList />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
