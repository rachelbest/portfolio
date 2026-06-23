import React, { Component } from 'react';
import Gallery from './components/CharacterGallery';
import BearlyCraftea from './components/BearlyCraftea';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Projects extends Component {

	render() {
		return (
			<section className="projects" id="sectionProjects">
				<h2>Projects & Hobbies</h2>
				<article>
					<Route component={Gallery} />
				</article>
				<article>
					<Route component={BearlyCraftea} />
				</article>
				<article>
					<div className="splitmediablock">
						<div className="splitmediablock__text">
							<p className="h3">Accessibility</p>
                    		<p>As a pasionate advocate for accessibility, I have recently started learning BSL (British Sign Language) in my spare time. I began doing this to encourage communication with my toddler, but soon realised it was very enjoyable and deepened my understanding of the deaf community. 
                    		<br /><br />I have a strong commitment to inclusivity in my work and strive to ensure that digital content is accessible to a wide and diverse audience.</p>
                    	</div>
                    </div>
				</article>
			</section>
		)
	}
}
