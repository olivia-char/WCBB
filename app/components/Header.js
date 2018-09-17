import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../main.css';


export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
    <div className="container-fluid" style={styles.Background}>
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12" style={styles.Header}>
					<h1 style={styles.Title}>We're Coming Back Better!</h1>
					<h1>Concerts</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-5 offset-2 col-sm-5 col-md-6 offset-md-1 col-lg-6 offset-lg-1" style={styles.TagLine}>
					<h1><b>2017 Wildfire Survivors</b></h1>
					<h1>Supporting Each Other</h1>
					<h2>&#40; With a Little Help from Our Friends &#41;</h2>
				</div>

				<div className="col-5 col-sm-5 col-md-5 col-lg-5">
    			<div className="row">
						<div className="col-11 col-sm-11 col-md-10 col-lg-8 " style={styles.TimeBubble}>
							<h1>October 13th</h1>
							<h2>2pm - 7pm</h2>
							<h2>Glenét Vineyards</h2>
							<h2>Glen Ellen</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-8 col-sm-8 offset-sm-6 col-md-6 offset-md-5 col-lg-6 offset-lg-4" style={styles.TicketBubble}>
							<h2 style={styles.blah}>Tickets</h2>
							<h4 style={styles.bla}>$20 GENERAL ADMISSION</h4>
							<h4 style={styles.blak}>$50 VIP</h4>
						</div>
       		</div>
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
		textAlign: "center",
		fontFamily: "Imprima",
	},
	TimeHeader: {
		marginTop: "12%"
	},
	TagLine: {
		paddingBottom: "12%"
	},
	blah: {
		padding: "10% 0% 0% 0%",
		margin: "0%"
	},
	bla: {
		paddingTop: "5%",
		margin: "0%"
	},
	blak: {
		padding: "5% 0% 10% 0%",
		margin: "0%"
	},
	Header: {
    margin: "5% 0% 5% 0%",
    fontFamily: "primaryFont",
		textShadow: " 1px 1px black"
  },
  Title: {
    fontSize: "50px"
  },
	TimeBubble: {
		borderRadius: "50%",
		backgroundColor: "#D81159",
		fontSize: "25px",
		fontFamily: "Imprima",
		padding: "9%"
	},
	TicketBubble: {
		marginTop: "-8%",
		borderRadius: "50%",
		backgroundColor: "#52489C",
		position: "absolute",
	},
}
