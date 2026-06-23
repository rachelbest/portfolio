import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

import Menu from './../assets/images/icons/menu.svg';
import Twitter from './../assets/images/icons/twitter.svg';
import Codepen from './../assets/images/icons/codepen.svg';
import Linkedin from './../assets/images/icons/linkedin.svg';
import Email from './../assets/images/icons/email.svg';
import Logo from './../assets/images/rachel-best.svg';

export default class Header extends Component {

	render() {
		function openMenu() {
			document.body.classList.add("slide-out")
		}

		function closeMenu() {
			document.body.classList.remove("slide-out")
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
					<NavLink to="/about" className="header__logo">
						<img src={Logo} alt="logo" height="30"/>
					</NavLink>
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
								Projects & Hobbies
							</Link>
						</nav>
						<div className="nav-overlay" id="nav-overlay" onClick={() => closeMenu()}></div>
					</div>
					<ul className="social-media">
						<li className="twitter">
							<a href="https://twitter.com/rachel_web" alt="Twitter" rel="nofollow"><img src={Twitter} alt="twitter" height="20px" width="auto" /></a>
						</li>
						<li className="codepen">
							<a href="https://codepen.io/rachel_web" alt="Codepen" rel="nofollow"><img src={Codepen} alt="codepen" height="20px" width="auto" /></a>
						</li>
						<li className="linkedin">
							<a href="https://www.linkedin.com/in/rachel-best-b3535536/" alt="Linkedin" rel="nofollow"><img src={Linkedin} alt="linkedin" height="20px" width="auto" /></a>
						</li>
						<li className="email">
							<a href="mailto:rachel13bull@gmail.com?Subject=Email%20afrom%20rachelbest.github.io" alt="Email rachel13bull@gmail.com" rel="nofollow" target="_top"><img src={Email} alt="email" height="20px" width="auto" /></a>
						</li>
					</ul>
					<a href="#" className="header__menu-button" onClick={() => openMenu()} rel="nofollow">
						<img src={Menu} alt="Menu" height="30px" width="auto" />
					</a>
				</div>
			</header>
		)
	}
}
