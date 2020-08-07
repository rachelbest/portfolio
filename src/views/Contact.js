import React, { Component } from 'react';


import './../assets/css/Contact.css';

export default class Contact extends Component {

	render() {
		return (
			<div className="contact">
				<h2>Contact</h2>
				<div className="contact__container">
					<p>Email: <a href="mailto:rachel13bull@gmail.com?Subject=Exmail%20afrom%20rachel13bull.github.io" rel="nofollow">rachel13bull@gmail.com</a></p>
					<p>Twitter: <a href="https://twitter.com/rachel_web" rel="nofollow">@rachel_web</a></p>
					<p>Linkedin: <a href="https://uk.linkedin.com/in/rachel-bull-b3535536" rel="nofollow">https://uk.linkedin.com/in/rachel-bull-b3535536</a></p>
				</div>
			</div>
		)
	}
}