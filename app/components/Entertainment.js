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
	          <h4 style={styles.Header}>Lineup</h4>
	        </div>
					<div className="col-sm-5 col-md-6 col-lg-4 offset-lg-1" style={styles.Headline}>
     				<h1 style={styles.LineupTitle}>Headliner</h1>
						<img src={TheZins} width={"75%"} />
     			</div>
	        <div className="col-sm-6 col-md-6 col-lg-5 offset-lg-1" style={styles.Body}>
	         <h1 style={styles.LineupTitle}>Featuring</h1>
					 <h2>The Zins</h2>
					 <h2>Stax City</h2>
					 <h2>Scarlett Letters</h2>
					 <h2>T-Luke and the Tight Suits</h2>
					 <h2>The Moose Brothers &#38; Sistars</h2>
					 <h2>Wunderkinds - Audrey &#38; Anya</h2>
					 <h2>Stewert Degner</h2>
					 <h2>And More!</h2>
	        </div>
					<div className="col-sm-12 col-md-12 col-lg-12" style={styles.TagLine}>
						<h2>Six Hours of Non-Stop Fantastic Entertainment</h2>
						<h3>Music, Maestros, Magic, Memories, Memes &#38; More</h3>
					</div>
	        <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 offset-lg-2 col-lg-8">
	          <h4 style={styles.Link}><a href="https://www.eventbrite.com/e/were-coming-back-better-concerts-tickets-47127231819" target="_blank">Buy Tickets Here</a></h4>
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
		marginBottom: "10%"
	},
  Body: {
    marginTop: "2%",
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
