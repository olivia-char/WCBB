import React, { Component } from 'react';

import Header from './Header.js'
import Stories from './Stories.js'
import Entertainment from './Entertainment.js'
import Sponsors from './Sponsors.js'
import Intro from './Intro.js'
import About from './About.js'
import Patrons from './Patrons.js'
import '../main.css';


export default class Body extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
      <div className="row">
				<Header />
				<Intro />
				<About />
				<Entertainment />
				<Stories />
				<Patrons />
       	<Sponsors />
     </div>
		)
	}
}
