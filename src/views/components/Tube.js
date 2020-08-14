import React, { Component } from 'react';

import './../../assets/css/components/tube.css';

export default class TowerBridge extends Component {

	render() {
		return (

			<div>
				<div className="tube__container">
					<div className="tube__train">
						<div className="driver driver--front"></div>
						<div className="driver driver--back"></div>
						<div className="window"></div>
						<span className="door">
							<div className="window"></div>
						</span>
						<span className="door">
							<div className="window"></div>
						</span>
						<span className="door">
							<div className="window"></div>
						</span>
						<span className="door">
							<div className="window"></div>
						</span>
						<span className="door">
							<div className="window"></div>
						</span>
					</div>
				</div>
				<div className="tube"></div>
			</div>
		)
	}
}