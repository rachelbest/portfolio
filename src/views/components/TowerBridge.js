import React, { Component } from 'react';

import './../../assets/css/components/tower_bridge.css';

export default class TowerBridge extends Component {

	render() {
		return (

			<div className="mask">
				<div className="tower-bridge">
					<div className="tower-bridge__lines tower-bridge__lines--left">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="tower-bridge__lines tower-bridge__lines--right">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="tower-bridge__road tower-bridge__road--left"></div>
					<div className="tower-bridge__road tower-bridge__road--right"></div>
					<div className="tower-bridge__curve tower-bridge__curve--left top"></div>
					<div className="tower-bridge__curve tower-bridge__curve--right top"></div>
					<div className="tower-bridge__curve tower-bridge__curve--left"></div>
					<div className="tower-bridge__curve tower-bridge__curve--right"></div>
					<div className="tower-bridge__ramp tower-bridge__ramp--left animation-lift-left">
						<div className="ramp-bottom">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="tower-bridge__ramp tower-bridge__ramp--right animation-lift-right">
						<div className="ramp-bottom">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="tower-bridge__foot tower-bridge__foot--left"></div>
					<div className="tower-bridge__foot tower-bridge__foot--right"></div>
					<div className="tower-bridge__foot tower-bridge__foot--far-left"></div>
					<div className="tower-bridge__foot tower-bridge__foot--far-right"></div>
					<div className="tower-bridge__top-ledge">
						<div className="emblem"></div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="tower-bridge__tower tower-bridge__tower--left">
						<div className="column column--left"></div>
						<div className="column column--right"></div>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
					</div>
					<div className="tower-bridge__tower tower-bridge__tower--right">
						<div className="column column--left"></div>
						<div className="column column--right"></div>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
						<span className="section">
							<span className="window"></span>
							<span className="window"></span>
							<span className="window"></span>		
						</span>
					</div>
				</div>
			</div>
		)
	}
}