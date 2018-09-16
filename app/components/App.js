import React, { Component } from 'react';

import '../main.css';


export default class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div >
			{this.props.children}

			</div>

		)
	}
}
