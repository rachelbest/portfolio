import React, { Component } from 'react';

import bunny from './../../assets/images/bearlycraftea/bunny.jpg';
import unicorn from './../../assets/images/bearlycraftea/unicorn.jpg';
import sheep from './../../assets/images/bearlycraftea/sheep.jpg';
import alpaca from './../../assets/images/bearlycraftea/alpaca.jpg';
import totoro from './../../assets/images/bearlycraftea/totoro.jpg';
import butterfly from './../../assets/images/bearlycraftea/butterfly.jpg';
import BearlyCrafteaLogo from './../../assets/images/bearlycraftea/bearlycraftealogo.jpg';

export default class Gallery extends Component {
	render() {
		return (
            <article className="splitmediablock splitmediablock--crochet">
                <div className="splitmediablock__text">
                    <p className="h3">Crochet and Craft</p>
                    <img src={BearlyCrafteaLogo} width="80" height="auto" />
                    <p>I have always been very passionate about crafting and over the years have tried my hand at sewing, card-making, photo editing, embroidery, cross-stitch and painting. More recently I have come to enjoy crocheting to relax in my spare time. It has been a great challenge to learn a new skill and build something new every time.
                    <br /><br />I often donate my creations to local charitys and toddler and baby groups.</p>
                    <a href="http://instagram.com/bearlycraftea" rel="noopener noreferrer" target="_blank">View my crochet creations</a>
                </div>
                <ul className="splitmediablock__gallery">
                    <li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C5G0d24theL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Crocheted Bunny" rel="noopener noreferrer" target="_blank">
                                <img src={bunny} alt="Crocheted bunny" width="200" height="auto"/>
                            </a>
                        </div>
                    </li><li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C9THenQNVyE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Crocheted Unicorn" rel="noopener noreferrer" target="_blank">
                                <img src={unicorn} alt="Crocheted unicorn" width="200" height="auto"/>
                            </a>
                        </div>
                    </li><li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C426BJ1NaWd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==a" title="Crocheted Sheep" rel="noopener noreferrer" target="_blank">
                                <img src={sheep} alt="Crocheted sheep" width="200" height="auto"/>
                            </a>
                        </div>
                    </li><li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C5BCKlDNDwq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Crocheted Alpaca" rel="noopener noreferrer" target="_blank">
                                <img src={alpaca} alt="Crocheted alpaca" width="200" height="auto"/>
                            </a>
                        </div>
                    </li><li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C9XCKanucot/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Crocheted Totoro" rel="noopener noreferrer" target="_blank">
                                <img src={totoro} alt="Crocheted totoro" width="200" height="auto"/>
                            </a>
                        </div>
                    </li><li>
                        <div className="frame">
                            <a href="https://www.instagram.com/p/C-UqrgOO29O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" title="Crocheted Butterfly" rel="noopener noreferrer" target="_blank">
                                <img src={butterfly} alt="Crocheted butterfly" width="200" height="auto"/>
                            </a>
                        </div>
                    </li>
                </ul>
            </article>
		)
	}
}
