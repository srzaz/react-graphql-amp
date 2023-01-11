import { projects } from '../../data/projects';

const ProjectList = () => {
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
								margin: '0.5em 0.5em 0.5em',
							}}
						>
							See more from this project
						</p>
					</div>
					<div className='project-img'>
						<img src={project.image} alt={project.name} />
					</div>
					<hr />
				</div>
			))}
		</div>
	);
};

export default ProjectList;
