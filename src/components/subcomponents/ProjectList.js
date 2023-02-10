import { projects } from '../../data/projects';
import { useState, useEffect, useRef } from 'react';

const ProjectList = () => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);
	const delay = 6000;

	// function resetTimeout() {
	// 	if (timeoutRef.current) {
	// 		clearTimeout(timeoutRef.current);
	// 	}
	// }

	// useEffect(() => {
	// 	resetTimeout();
	// 	timeoutRef.current = setTimeout(
	// 		() => setIndex((prevIndex) => (prevIndex === 1 ? 0 : 1)),
	// 		delay
	// 	);

	// 	return () => {
	// 		resetTimeout();
	// 	};
	// }, [index]);

	return (
		<div id='project-list'>
			{projects.map((project) => (
				<div key={project.id} className='project'>
					<div className='project-text'>
						<h2 style={{ textTransform: 'uppercase' }}>{project.name}</h2>
						<p>{project.description}</p>
						<p
							style={{
								textDecoration: 'underline',
								margin: '0.5em 0 0.5em',
							}}
						>
							<a href={project.link} target='_blank' rel='noreferrer'>
								Click here to see more
							</a>
						</p>
					</div>
					<div className='project-img'>
						<img className='pimg' src={project.image[0]} alt={project.name} />
					</div>
					<hr />
				</div>
			))}
		</div>
	);
};

export default ProjectList;
