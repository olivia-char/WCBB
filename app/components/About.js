import React, { Component } from 'react';

import '../main.css';


export default class About extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
    <div className="container-fluid" style={styles.Background}>
			<div className="row">
			 <div className="col-sm-12 col-md-12 col-lg-12">
				 <h4 style={styles.Header}>WCBB Anniversary Event</h4>
			 </div>
       <div className="col-lg-8">
    			<h1>this is where the video goes</h1>
       </div>
			 <div className="col-sm-12 col-md-12 col-lg-12">
         	<h2 style={styles.Title}>"Precious Day for Priceless People"</h2>
			 </div>
			 <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2" style={styles.Body}>
			    <p>
            This is an event to feature Survivor musicians and bands as well as other local artists and
            neighbors who are celebrating our collective recovery by finding and recreating some of the
            missing pieces of our lives.
          </p>
          <p>
            Expect great cuisine and fantastic, special entertainment, and presentations of the precious
            items to the priceless people and their families.
          </p>
          <p>We can accommodate 150 guests, so be sure to get tickets early.</p>
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
  Title: {
    marginTop: "2%",
    textAlign: "center",
    fontFamily: "secondaryFont"
  },
  Body: {
    marginTop: "3%",
		marginBottom: "3%",
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: "22px",
		padding: "0% 5% 0% 5%"
  }
}
