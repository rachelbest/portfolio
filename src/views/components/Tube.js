import React, { Component } from 'react';

import './../../assets/css/components/tube.css';

export default class TowerBridge extends Component {

	render() {
		return (

			<div>
				<div class="tube"></div>
				<div class="tube__container">
					<div class="tube__train">
						<div class="driver driver--front"></div>
						<div class="driver driver--back"></div>
						<div class="window"></div>
						<span class="door">
							<div class="window"></div>
						</span>
						<span class="door">
							<div class="window"></div>
						</span>
						<span class="door">
							<div class="window"></div>
						</span>
						<span class="door">
							<div class="window"></div>
						</span>
						<span class="door">
							<div class="window"></div>
						</span>
					</div>
				</div>
			</div>
		)
	}
}