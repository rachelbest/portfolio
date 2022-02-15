import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'

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
						<NavLink to="/about" className="header__logo">
							<img src={logo} alt="logo" height="30"/>
						</NavLink>
					</div>
					<div className="header__menu-container" id="nav-container">
						<nav>
							<Link
								activeClass="active"
								to="sectionAbout"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								containerId="scrollContainer"
								onClick={() => closeMenu()}
							>
								About
							</Link>
							<Link
								to="sectionExperience"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								containerId="scrollContainer"
								onClick={() => closeMenu()}
							>
								Experience
							</Link>
							<Link
								to="sectionSkills"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								containerId="scrollContainer"
								onClick={() => closeMenu()}
							>
								Skills
							</Link>
							<Link
								to="sectionProjects"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								containerId="scrollContainer"
								onClick={() => closeMenu()}
							>
								Projects
							</Link>
						</nav>
					</div>
					<div className="nav-overlay" id="nav-overlay" onClick={() => closeMenu()}></div>
					<ul className="social-media">
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" rel="nofollow"><img src={twitter} alt="twitter" height="20px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://www.linkedin.com/in/rachel-best-b3535536/" rel="nofollow"><img src={linkedin} alt="linkedin" height="20px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Email%20afrom%20rachelbest.github.io" rel="nofollow" target="_top"><img src={email} alt="email" height="20px" width="auto" /></a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
