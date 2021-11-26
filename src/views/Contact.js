import React, { Component } from 'react';

import twitter from './../assets/images/twitter.svg';
import linkedin from './../assets/images/linkedin.svg';
import email from './../assets/images/email.svg';

export default class Contact extends Component {

	render() {
		return (
			<section className="contact">
				<h2>Contact</h2>
				<div className="contact__container">
					<ul className="social-media contact">
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" rel="nofollow"><img src={twitter} alt="twitter" height="20px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://uk.linkedin.com/in/rachel-bull-b3535536" rel="nofollow"><img src={linkedin} alt="linkedin" height="20px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Exmail%20afrom%20rachel13bull.github.io" rel="nofollow" target="_top"><img src={email} alt="email" height="20px" width="auto" /></a>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}