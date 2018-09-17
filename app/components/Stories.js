import React, { Component } from 'react';

import '../main.css';


export default class Stories extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
    <div className="container-fluid" style={styles.Background}>
			<div className="row">
			 <div className="col-sm-12 col-md-12 col-lg-12">
				 <h4 style={styles.Header}>Wildfire Survivors</h4>
			 </div>
			 <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2" style={styles.Body}>
			 	<p>
					Submit your story of what you and family think about and miss.
					It could be a favorite book, a piece of jewelry, or a painting; an indoor or outdoor plant; a child’s tree house; a piece of furniture, a musical instrument, sewing machine, turntable, or a beloved collection.</p>
				<p>
					 What comes to your mind as you process your loss? Nothing is too small or too large to be considered.
					 We’ll seek the assistance of local benefactors and artisans (craftspeople, period experts, jewelers, and businesses) to find and reconstruct the personal treasures.
				</p>
			 	<p>
					You may also submit the story of a friend or loved one on their behalf.
					Our goal is to replace 100 precious items and we’ll address as many stories as possible.
				</p>
				<h4 style={styles.Link}>Submit your story at <a href={'https://tinyurl.com/wcbbstories'} target="_blank">https://tinyurl.com/wcbbstories</a></h4>
			 </div>
		 </div>
    </div>
		)
	}
}
const styles = {
	Background: {
		backgroundColor: "#4ECDC4",
		color: "#F7FFF7",
	},
  Header: {
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "primaryFont",
  },
  Body: {
    marginTop: "3%",
		marginBottom: "3%",
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: "22px",
		padding: "0% 5% 0% 5%"
  },
  Link: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "secondaryFont"
  }
}
