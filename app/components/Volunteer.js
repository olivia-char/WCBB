import React, { Component } from 'react';
import VinePro from "../assets/vinoPro.jpg"
import Bananas from "../assets/bananasAtLarge.jpg"
import Rodney from "../assets/RodneyStrongVineyards.jpg"
import Mackie from "../assets/Mackie.jpg"
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
				 <h4 style={styles.Header}>WCBB Sponsors and Volunteers</h4>
			 </div>

			<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				 <img src={Bananas} width={"100%"}/>
			</div>
			<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
				 <img src={VinePro} width={"100%"}/>
			</div>
			<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				 <img src={Rodney} width={"100%"}/>
			</div>
			<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				 <h2>Jeff Stevenson</h2>
			</div>
			<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
				 <img src={Mackie} width={"100%"}/>
			</div>
			<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				<h2>Jimmy Mona</h2>
				&#38;
				<h2>Johnny Capo</h2>
			</div>
		</div>

		<div className="row" style={styles.SponsorInfo}>
			<div className="col-sm-12 col-md-12 col-lg-12" style={styles.SponsorInfoTitle}>
   			<h2>Patron Sponsorships</h2>
   		</div>
			<div className="col-sm-3 col-md-3 col-lg-3">
				<h4>Platinum</h4>
				<h5>&#40; includes six VIP tickets &#41;</h5>
				<h5> &#36;2500</h5>
			</div>

			<div className="col-sm-3 col-md-3 col-lg-3">
				<h4>Gold</h4>
				<h5>&#40; includes four VIP tickets &#41;</h5>
				<h5> &#36;1000</h5>
			</div>
			<div className="col-sm-3 col-md-3 col-lg-3">
				<h4>Silver</h4>
				<h5>&#40; includes two VIP tickets &#41;</h5>
				<h5> &#36;500</h5>
			</div>
			<div className="col-sm-3 col-md-3 col-lg-3">
				<h4>Bronze</h4>
				<h5>&#40; includes two GA tickets &#41;</h5>
				<h5> &#36;250</h5>
			</div>
  	</div>

			<div className="row">
			 <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 offset-lg-2 col-lg-8" style={styles.Body}>
				 <p>
					Would you like to be a Business or Individual Sponsor for our events with recognition at our event and on our WCBB posters to be displayed around Sonoma and Napa Counties? Or, perhaps you’d like to make a cash or in-kind contribution to one of our precious items, again with recognition. Wonderful!
				</p>
				<p>
				 Ready to volunteer? Terrific! We have a variety of needs and we will soon have a list of precious items to source or purchase.
				</p>
				<h4 style={styles.Link}>Email  <a href="mailto:comingbackbetter@gmail.com">comingbackbetter@gmail.com</a> for details.</h4>
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
		fontFamily: "secondaryFont",
		textAlign:"center"
	},
	Sponsor: {
		marginTop: "3%",
	},
	SponsorInfo: {
		marginTop: "5%",
	},
	SponsorInfoTitle: {
		marginBottom: "3%"
	},
  Header: {
    marginTop: "10%",
    textAlign: "center",
    fontFamily: "primaryFont",
  },
  Body: {
    marginTop: "3%",
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: "22px",
		padding: "0% 5% 0% 5%"
  },
  Link: {
    marginTop: "2%",
		marginBottom: "10%",
    textAlign: "center",
    fontFamily: "secondaryFont"
  }
}
