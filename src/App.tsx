import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Hero />
			<About />
		</BrowserRouter>
	);
};

export default App;
