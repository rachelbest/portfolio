import React, { Component } from 'react';

import mumsnet from './../assets/images/companies/mumsnet_logo.svg';
import incentivated from './../assets/images/companies/incentivated_logo.png';
import havillands from './../assets/images/companies/havillands_logo.jpg';

export default class Experience extends Component {

	render() {
		return (
			<section className="experience" id="sectionExperience">
				<h2>Experience</h2>
				<article>
					<img className="experience__logo" src={mumsnet} alt="Mumsnet" height="49" width="140" />
					<h3 className="experience__title">Frontend Web Developer</h3>
					<p className="experience__subheading">Mumsnet <span>Nov 2011 – Present</span></p>
					<p className="experience__intro">An long time team member, delivering responsive and accessible web solutions across multiple platforms for the most trusted, and most influencial website for parents in the UK.</p>
					<ul>
						<li>Contribute high quality, readable code across entire stack (500k+ lines of code)</li>
						<li>Develop responsive & accessibile web content for cross-platform site with 1.2 billion page views per year</li>
						<li>Contribute to two transformations of entire stack from page-based styles to modular component styles</li>
						<li>Working with advertising brands to provide bespoke advertising solutions within tight deadlines</li>
						<li>Lead the team with responsibility to ensure site meets web accessibility standards</li>
						<li>Optimise site through A/B testing and personalisation using Google Optimize & Kameleoon</li>
						<li>Competent peer reviews, quality checking & pair programming</li>
						<li>Agile development & working closely with other teams</li>
					</ul>
					<p>JS, jQuery, AlpineJS, VueJS, CSS, Sass, Tailwind, Bootstrap, Laravel, Livewire & Haml</p>
				</article>
				<article>
					<img className="experience__logo" src={incentivated} alt="Incentivated" height="auto" width="150" />
					<h3 className="experience__title">Designer/Developer</h3>
					<p className="experience__subheading">Incentivated <span>July – Nov 2011</span></p>
					<p className="experience__intro">Internship with a split role as a member of IT and Creative/Production teams, creating digital design solutions for mobile applications agency.</p>
					<ul>
						<li>Created animated banner ads, mock ups for approval & integrated CMS blog on company website</li>
						<li>Email templates & newsletters for clients</li>
						<li>Provided mock ups, graphs and assets for presentations, award entries and client pitches</li>
						<li>Clients whose accounts were worked on included British Airways, Waitrose, PwC, Scottish Power, Jameson & British Heart Foundation</li>
					</ul>
					<p>HTML, CSS & jQuery</p>
				</article>
				<article>
					<img className="experience__logo" src={havillands} alt="Havillands & Co" height="auto" width="150" />
					<h3 className="experience__title">Trainee Designer/Developer</h3>
					<p className="experience__subheading">Havillands & Co. <span>Jan – Mar 2011</span></p>
					<p className="experience__intro">Part-time role while studying for university degree. Designing and implementing several websites for SEO purposes.</p>
					<ul>
						<li>Created several affiliate website with tight deadlines</li>
						<li>Worked alongside senior developers to learn new skills</li>
						<li>Utilized Google tools to improve SEO</li>
					</ul>
					<p>HTML, CSS, & JS</p>
				</article>
			</section>
		)
	}
}