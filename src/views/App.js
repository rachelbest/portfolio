import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import About from './About';
import ExtraCurricular from './ExtraCurricular';
import Experience from './Experience';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './../assets/css/app.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route component={Header} />
					<nav class="container">
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/extra-curricular" component={ExtraCurricular} />
							<Route path="/experience" component={Experience} />
							<Route path="/contact" component={Contact} />
							<Route component={Landing} />
						</Switch>
					</nav>
					<Route component={Footer} />
				</div>
			</Router>
		);
	}
}

export default App;
