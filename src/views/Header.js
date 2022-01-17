import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './../assets/images/menu.svg';
import twitter from './../assets/images/twitter.svg';
import linkedin from './../assets/images/linkedin.svg';
import email from './../assets/images/email.svg';
import logo from './../assets/images/logo.png';

export default class Header extends Component {

	render() {
		function openMenu() {
			document.getElementById("nav-container").classList.add("slide-out")
		}

		function closeMenu() {
			document.getElementById("nav-container").classList.remove("slide-out")
		}

		function resizeWindow() {
			if (window.innerWidth >= 576) {
				closeMenu();
			}
		}
		window.addEventListener('resize', resizeWindow);

		return (
			<header className="header">
				<div className="header__container">
					<div className="header__initial">
						<a href="#" className="header__menu-button" onClick={() => openMenu()} rel="nofollow">
							<img src={Menu} alt="Menu" height="30px" width="auto" />
						</a>
						<NavLink to="/" className="header__logo">
							<img src={logo} alt="logo" height="30"/>
						</NavLink>
					</div>
					<div className="header__menu-container" id="nav-container">
						<nav>
							<NavLink to="/" activeClassName="active" exact={true} onClick={() => closeMenu()}>
								Home
							</NavLink>
							<NavLink to="/experience" onClick={() => closeMenu()}>
								Experience
							</NavLink>
							<NavLink to="/skills" onClick={() => closeMenu()}>
								Skills
							</NavLink>
							<NavLink to="/contact" onClick={() => closeMenu()}>
								Contact
							</NavLink>
						</nav>
					</div>
					<div className="nav-overlay" id="nav-overlay" onClick={() => closeMenu()}></div>
					<ul className="social-media">
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" rel="nofollow"><img src={twitter} alt="twitter" height="20px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://uk.linkedin.com/in/rachel-bull-b3535536" rel="nofollow"><img src={linkedin} alt="linkedin" height="20px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Exmail%20afrom%20rachel13bull.github.io" rel="nofollow" target="_top"><img src={email} alt="email" height="20px" width="auto" /></a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
