import React, { Component } from 'react';

import Header from './Header.js'
import Stories from './Stories.js'
import Entertainment from './Entertainment.js'
import Volunteer from './Volunteer.js'
import Intro from './Intro.js'
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
				<Entertainment />
				<Stories />
       <Volunteer />
     </div>
		)
	}
}
