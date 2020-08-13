import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../assets/images/rb-logo-circled.png';
import './../assets/css/header.css';

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { scrollClass: "header__absolute" }
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			let isTop = window.scrollY < 40;
			if (isTop !== true) {
				this.setState({ scrollClass: "header__sticky" })
			} else {
				this.setState({ scrollClass: "header__absolute" })
			}
		});
	}

	render() {
		let { scrollClass } = this.state

		return (
			<header className={"header " + scrollClass}>
				<div className="header__container">
					<NavLink to="/" className="header__logo">
						<img src={logo} alt="logo" height="70"/>
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
