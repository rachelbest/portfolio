import React, { Component } from 'react';
import Tube from './components/Tube';
import Eye from './components/Eye';
import TowerBridge from './components/TowerBridge';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Footer extends Component {

	render() {
		return (
			<footer>
				<Router>
					<div className="components">
						<Route component={Eye} />
						<Route component={TowerBridge} />
					</div>
					<Route component={Tube} />
				</Router>
			</footer>
		)
	}
}
