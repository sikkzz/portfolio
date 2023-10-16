import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Hero />
			<About />
			<Project />
		</BrowserRouter>
	);
};

export default App;
