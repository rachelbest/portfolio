import React, { Component } from 'react';
import Eye from './components/Eye';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import twitter from './images/twitter.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png';
import './styles/css/Footer.css';

export default class Footer extends Component {

	render() {
		return (
			<footer>
				<div className="footer__container">
					<p>Rachel Bull 2019</p>
					<Router>
						<div className="App">
							<Route component={Eye} />
						</div>
					</Router>
					<ul>
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" rel="nofollow"><img src={twitter} alt="twitter" height="26px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://uk.linkedin.com/in/rachel-bull-b3535536" rel="nofollow"><img src={linkedin} alt="linkedin" height="26px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Exmail%20afrom%20rachel13bull.github.io" rel="nofollow" target="_top"><img src={email} alt="email" height="26px" width="auto" /></a>
						</li>
					</ul>
				</div>
			</footer>
		)
	}
}
