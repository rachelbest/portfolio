import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Clouds from './components/Clouds';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		document.body.style.overflow = "hidden";
		document.body.classList.add("no-scroll");

		return (
			<Router>
				<div className="App">
					<Route component={Clouds} />
					<Route component={Header} />
					<div className="container" id="scrollContainer">
						<div className="main">
							<About />
							<Experience />
							<Skills />
							<Projects />
						</div>
						<Route component={Footer} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
