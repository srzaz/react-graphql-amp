import rprojectimage from './RProjectImgs/APPL_RevenueGrowth.jpeg';
import rprojectimage2 from './RProjectImgs/REV_Growth_Comparison.jpeg';
import quizprojectimage from './fsquizimgs/Quiz app -- user can sign in.png';
import quizprojectimage2 from './fsquizimgs/Quiz app -- after sign in, routing test -- account renders.png';
export const projects = [
	{
		id: 1,
		name: 'Fullstack Quiz',
		description:
			'A dynamic quiz website built with React, Node, and MongoDB. Ten random questions are pulled from an API and are cleaned on the front end. User scores are saved on MongoDB. All user scores can be retrieved and filtered in a multitude of ways. ',
		image: [quizprojectimage, quizprojectimage2],
		link: 'https://github.com/srzaz/Fullstack-Quiz#fullstack-quiz',
	},
	{
		id: 2,
		name: 'Financial Analysis with R',
		description:
			'Stock and company analysis with visualizations using R. I parsed and cleaned data from Microsoft Excel and the web, and using ggplot, I performed statistical analysis on multiple stocks, performed portfolio optimization, and created data visualizations.',
		image: [rprojectimage, rprojectimage2],
		link: 'https://github.com/srzaz/R-Project',
	},
];

export default projects;
