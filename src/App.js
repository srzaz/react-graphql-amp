import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</div>
	);
};

export default App;
