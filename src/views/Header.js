import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../assets/images/rb-logo-circled.png';
import './../assets/css/header.css';

export default class Header extends Component {

	render() {
		return (
			<header className="header">
				<div className="header__container">
					<NavLink to="/Portfolio">
						<img src={logo} alt="logo" height="70"/>
					</NavLink>
					<nav>
						<NavLink to="/portfolio/about" activeClassName="active">
							About
						</NavLink>
						<NavLink to="/portfolio/experience">
							Experience
						</NavLink>
						<NavLink to="/portfolio/extra-curricular">
							Extra Curricular
						</NavLink>
						<NavLink to="/portfolio/contact">
							Contact
						</NavLink>
					</nav>
				</div>
			</header>
		)
	}
}
