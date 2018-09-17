import React, { Component } from 'react';
import TheZins from "../assets/zinsLogo.png"
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
	          <h4 style={styles.Header}>Tickets &#38; Lineup</h4>
	        </div>
					<div className="col-sm-12 col-md-12 col-lg-12" style={styles.TagLine}>
						<h4> Five Hours of Non-Stop Fantastic Entertainment</h4>
						<h5>Music, Maestros, Magic, Memories, Memes &#38; More</h5>
					</div>
					<div className="col-sm-5 offset-sm-1 col-md-5 offset-md-1 col-lg-5 offset-lg-1" style={styles.Body}>
					<h1 style={styles.LineupTitle}>Featuring</h1>
					<h2>Johnny Capo &#38; Jimmy Mona</h2>
					<h4>&#40;With Jeff Stevenson&#41;</h4>
					<h2>Moose Bros. &#38; Audrey Rose</h2>
					<h2>Stewart Degnar</h2>
					<h2>Dave Reed &#38; Friends</h2>
					<h4>And More!</h4>
				 </div>
					<div className="col-sm-5 col-md-5 col-lg-5" style={styles.Body}>
						<div className="row" style={styles.Body}>
							<div className="col-sm-12 col-md-12 col-lg-12">
								<h2>General Admission - &#36;20</h2>
								<h4>Admission plus 1 Drink Ticket</h4>
       				</div>
      			</div>
						<div className="row" style={styles.Body}>
							<div className="col-sm-12 col-md-12 col-lg-12">
							<h2>VIP - &#36;50</h2>
							<h4>Admission plus 2 Drink Tickets and 1 Food Ticket</h4>
       				</div>
      			</div>
						<div className="row">
							<div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 offset-lg-2 col-lg-8">
								<h4 style={styles.Link}><a href="https://www.eventbrite.com/e/were-coming-back-better-one-year-anniversary-concert-tickets-45650529964" target="_blank">Buy Tickets Here</a></h4>
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
		backgroundColor: "#F7FFF7",
	},
  Header: {
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "primaryFont",
  },
	TagLine: {
		textAlign: "center",
		fontFamily: "Imprima",
		marginTop: "3%",
	},
	Headline:{
		fontFamily:"secondaryFont",
		textAlign:"center",
		marginTop: "2%",
	},
	LineupTitle: {
		marginBottom: "5%"
	},
  Body: {
    marginTop: "2%",
		marginBottom:"3%",
    textAlign: "center",
    fontFamily: "secondaryFont",

  },
  Link: {
    marginTop: "2%",
		marginBottom: "3%",
    textAlign: "center",
    fontFamily: "secondaryFont"
  }
}
