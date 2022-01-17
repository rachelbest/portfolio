import React, { Component } from 'react';
import Gallery from './components/CharacterGallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import rachel from './../assets/images/rachel.png';

export default class Landing extends Component {

	render() {
		return (
			<section className="aboutme">
				<article>
					<img className="aboutme__image" src={rachel} alt="Rachel Best Digital Art" width="200" height="auto"/>
					<h1>Rachel Best</h1>
					<p className="subheading">Frontend Web Developer</p>
					<p>I am a Frontend Web Developer from London with 10+ years experience in coding responsive web solutions for multiple platforms. I have a First-Class degree in Multimedia Computing (BSc) from Anglia Ruskin University where I discovered my passion for creative web development.</p>
				</article>
				<Route component={Gallery} />
			</section>
		)
	}
}
