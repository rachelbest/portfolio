import React, { Component } from 'react';

import minion from './images/examples/minion.png';
import brian from './images/examples/brian.png';
import stewie from './images/examples/stewie.png';
import lego from './images/examples/lego.png';
import spongebob from './images/examples/spongebob.png';
import mike from './images/examples/mike.png';
import './styles/css/CharacterGallery.css';

export default class ExtraCurricular extends Component {

	render() {
		return (
			<div className="extra-curricular">
				<div className="section">
					<div className="characters">
						<div className="side-text">
							<h3>Pure CSS Characters</h3>
							<p>In my spare time I enjoy recreating popular cartoon characters using only CSS(SASS) and HTML. It's a great challenge and enables me to further my coding skills. I enjoy showing people what can be achieved using only CSS and by doing so I've gained advanced SASS knowledge.
							<br /><br />With collective viewing figures of over 250,000, I hope that these characters will inspire people to learn to code.</p>
							<a href="http://codepen.io/collection/APYQyd/" rel="noopener noreferrer" target="_blank">View all pure CSS characters</a>
						</div>
						<ul>
							<li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/pjzowB"><img src={minion} alt="minion in pure CSS" width="300" height="auto"/></a>
								</div>
							</li><li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/VveQPW"><img src={brian} alt="brian in pure CSS" width="300" height="auto"/></a>
								</div>
							</li><li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/BoNjOq"><img src={stewie} alt="Stewie in pure CSS" width="300" height="auto"/></a>
								</div>
							</li><li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/rOLRvM"><img src={lego} alt="Lego man in pure CSS" width="300" height="auto"/></a>
								</div>
							</li><li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/aOeJJq"><img src={spongebob} alt="Spongebob in pure CSS" width="300" height="auto"/></a>
								</div>
							</li><li>
								<div className="frame">
									<a href="http://codepen.io/rachel_web/pen/NGqajK"><img src={mike} alt="Mike Monster in pure CSS" width="300" height="auto"/></a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
