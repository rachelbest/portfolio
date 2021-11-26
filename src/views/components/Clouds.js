import React, { Component } from 'react';

import cloud from './../../assets/images/cloud.svg';

export default class Clouds extends Component {

	render() {
		return (
            <div className="clouds" aria-hidden="true">
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
                <img src={cloud} alt="cloud" />
            </div>
		)
	}
}