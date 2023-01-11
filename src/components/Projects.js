import { projects } from '../data/projects';
import Menu from './Menu';

const Projects = () => {
	console.log(projects);
	return (
		<div className='App'>
			<div className='bar'>
				<Menu />
			</div>
			<div id='home'>
				<h1>My Projects</h1>
				{projects.map((project) => (
					<p key={project.id}>{project.name}</p>
				))}
			</div>
		</div>
	);
};

export default Projects;
