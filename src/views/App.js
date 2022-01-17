import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Clouds from './components/Clouds';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route component={Clouds} />
					<Route component={Header} />
					<nav className="container">
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/experience" component={Experience} />
							<Route path="/skills" component={Skills} />
							<Route path="/contact" component={Contact} />
							<Route component={About} />
						</Switch>
					</nav>
					<Route component={Footer} />
				</div>
			</Router>
		);
	}
}

export default App;
