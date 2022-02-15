import React, { Component } from 'react';
import Gallery from './components/CharacterGallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Projects extends Component {

	render() {
		return (
			<section className="projects" id="sectionProjects">
				<h2>Projects</h2>
				<article>
					<Route component={Gallery} />
				</article>
			</section>
		)
	}
}
