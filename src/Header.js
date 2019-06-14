import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './images/rb-logo-circled.png';
import './styles/css/Header.css';

console.log(logo); // /logo.84287d09.png

export default class Header extends Component {

	render() {
		return (
			<div className="header">
				<header className="static-header">
					<div className="static-header__container">
						<NavLink to="/" activeClassName="active">
							<img src={logo} alt="logo" height="100"/>
						</NavLink>
						<nav>
							<NavLink to="/about" activeClassName="active">
								About
							</NavLink>
							<NavLink to="/experience">
								Experience
							</NavLink>
							<NavLink to="/extra-curricular">
								Extra Curricular
							</NavLink>
							<NavLink to="/contact">
								Contact
							</NavLink>
						</nav>
					</div>
				</header>
				<header className="fixed-header">
					<div className="fixed-header__container">
						<img src={logo} alt="logo" width="30px" height="auto"/>
						<nav>
							<a href="#/about-me">About me</a>
							<a href="#/experience">Experience</a>
							<a href="#/creative">Creative</a>
							<a href="#/contact">Contact</a>
						</nav>
					</div>
				</header>
			</div>
		)
	}
}
