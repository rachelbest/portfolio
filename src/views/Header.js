import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../assets/images/rb-logo-circled.png';
import './../assets/css/Header.css';

export default class Header extends Component {

	render() {
		return (
			<header className="header">
				<div className="header__container">
					<NavLink to="/">
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
		)
	}
}
