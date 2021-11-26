import React, { Component } from 'react';

export default class Experience extends Component {

	render() {
		return (
			<section>
				<h2>Experience</h2>
				<div className="experience first">
					<p className="small">Nov 2011 – Present</p>
					<h3>Frontend Web Developer</h3>
					<p className="subheading">Mumsnet</p>
					<p>An enthusastic member of the team creating web templates and design solutions. Delivering high quality, user-friendly products across multiple platforms.</p>
				</div>
				<div className="experience">
					<p className="small">July – Nov 2011</p>
					<h3>Designer/Developer</h3>
					<p className="subheading">Incentivated</p>
					<p>Creating digital design solutions for web and mobile applications. Implementing designs and updating the company website.</p>
				</div>
				<div className="experience">
					<p className="small">Jan – Mar 2011</p>
					<h3>Trainee Designer/Developer</h3>
					<p className="subheading">Havillands & Co.</p>
					<p>Designing and implementing several websites for SEO purposes using HTML, CSS, PHP and basic JavaScript.</p>
				</div>
			</section>
		)
	}
}