import React, { Component } from 'react';

import { ReactComponent as HtmlLogo } from './../assets/images/icons/skills/html.svg';
import { ReactComponent as CssLogo } from './../assets/images/icons/skills/css.svg';
import { ReactComponent as SassLogo } from './../assets/images/icons/skills/sass.svg';
import { ReactComponent as LessLogo } from './../assets/images/icons/skills/less.svg';
import { ReactComponent as TailwindLogo } from './../assets/images/icons/skills/tailwind.svg';
import { ReactComponent as JavascriptLogo } from './../assets/images/icons/skills/javascript.svg';
import { ReactComponent as VueLogo } from './../assets/images/icons/skills/vue.svg';
import { ReactComponent as ReactLogo } from './../assets/images/icons/skills/react.svg';
import { ReactComponent as GithubLogo } from './../assets/images/icons/skills/github.svg';
import { ReactComponent as BootstrapLogo } from './../assets/images/icons/skills/bootstrap.svg';
import { ReactComponent as LaravelLogo } from './../assets/images/icons/skills/laravel.svg';
import { ReactComponent as LivewireLogo } from './../assets/images/icons/skills/livewire.svg';
import { ReactComponent as PhpLogo } from './../assets/images/icons/skills/php.svg';
import { ReactComponent as ClaudeLogo } from './../assets/images/icons/skills/claude.svg';
import { ReactComponent as JqueryLogo } from './../assets/images/icons/skills/jquery.svg';
import { ReactComponent as RubyLogo } from './../assets/images/icons/skills/ruby.svg';
import { ReactComponent as HamlLogo } from './../assets/images/icons/skills/haml.svg';
import { ReactComponent as FigmaLogo } from './../assets/images/icons/skills/figma.svg';
import { ReactComponent as LinearLogo } from './../assets/images/icons/skills/linear.svg';

export default class Skills extends Component {

	render() {
		return (
			<section className="skills" id="sectionSkills">
				<h2>Skills</h2>
				<div className="skills__icons">
					<div>
						<HtmlLogo />
						<p>HTML</p>
					</div>
					<div>
						<CssLogo />
						<p>CSS</p>
					</div>
					<div>
						<SassLogo />
						<p>Sass</p>
					</div>
					<div>
						<LessLogo />
						<p>Less</p>
					</div>
					<div>
						<TailwindLogo />
						<p>Tailwind</p>
					</div>
					<div>
						<JavascriptLogo />
						<p>Javascript</p>
					</div>
					<div>
						<VueLogo />
						<p>Vue.js</p>
					</div>
					<div>
						<ReactLogo />
						<p>React</p>
					</div>
					<div>
						<GithubLogo />
						<p>Github</p>
					</div>
					<div>
						<BootstrapLogo />
						<p>Bootstrap</p>
					</div>
					<div>
						<LaravelLogo />
						<p>Laravel</p>
					</div>
					<div>
						<LivewireLogo />
						<p>Livewire</p>
					</div>
					<div>
						<PhpLogo />
						<p>PHP</p>
					</div>
					<div>
						<ClaudeLogo />
						<p>Claude</p>
					</div>
					<div>
						<JqueryLogo />
						<p>jQuery</p>
					</div>
					<div>
						<RubyLogo />
						<p>Ruby on Rails</p>
					</div>
					<div>
						<HamlLogo />
						<p>Haml</p>
					</div>
					<div>
						<FigmaLogo />
						<p>Figma</p>
					</div>
					<div>
						<LinearLogo />
						<p>Linear</p>
					</div>
				</div>
			</section>
		)
	}
}