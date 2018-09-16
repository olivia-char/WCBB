import React, { Component } from 'react';
import '../main.css';



export default class Intro extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
    <div className="container-fluid" style={styles.Background}>
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12">
					<h4 style={styles.Header}>Our Mission</h4>
					<h2 style={styles.Title}>"100 Precious Things for 100 Priceless People"</h2>
				</div>

			 	<div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2" style={styles.Body} >
					<p>Last year’s wildfires destroyed over 7,000 homes and businesses in Sonoma and Napa Counties, leaving over 10,000 people totally devastated, including the unfathomable loss of 42 lives.</p>
					<p>Most people lost everything – irreplaceable family pictures, videos, artwork, family heirlooms – some things that are gone forever. But, a few of those precious things might be found again, perhaps not exactly, but close enough to restore some of the lost memories.</p>
					<p>“We’re Coming Back Better!” (WCBB) events are an attempt to ease survivors’ personal losses by finding or recreating items tied to memories of themselves, their families, and our community. WCBB is about our neighbors and friends reaching out to locate something dear to us – possibly a small but significant patch for our hearts and souls!</p>
					<p>We realize that regaining a personal treasure will never offset the hardship of the devastation; however, it may offer a bit of semblance to our collective lives that have changed forever.</p>
			  </div>
			</div>
    </div>
		)
	}
}

const styles = {
	Background: {
		backgroundColor: "#F7FFF7"
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
