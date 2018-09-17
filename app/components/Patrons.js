import React, { Component } from 'react';

import '../main.css';


export default class Patrons extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
    <div className="container-fluid" style={styles.Background}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h4 style={styles.Header}>Patron Sponsorships</h4>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={styles.PatronBox}>
          <h3>Gold</h3>
          <h5>Private Table - Includes 6 Seats, 3 Bottles of Wine Chardonnay or Pinot Noir</h5>
          <h5> &#36;1000</h5>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={styles.PatronBox}>
          <h3>Silver</h3>
          <h5>Shared Table - Includes 4 Seats, 2 Bottles of Wine Chardonnay or Pinot Noir</h5>
          <h5> &#36;500</h5>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4" style={styles.PatronBox}>
          <h3>Bronze</h3>
          <h5>Shared Table - Includes 2 Seats, 1 Bottle of Wine Chardonnay or Pinot Noir</h5>
          <h5> &#36;250</h5>
        </div>

        <div className="row">
         <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 offset-lg-2 col-lg-8" style={styles.Body}>
           <p>
            Would you like to be a Business or Individual Sponsor for our events with recognition at our event and on our WCBB posters to be displayed around Sonoma and Napa Counties? Or, perhaps you’d like to make a cash or in-kind contribution to one of our precious items, again with recognition. Wonderful!
          </p>
          <p>
            WCBB is a not-for-profit organization with proceeds going to survivor items and to concert
            operations (rentals, band/act stipends, not-for-profit fees, libations and cuisine, catering
            equipment, and sound). The event is managed and conducted by WCBB volunteers.
          </p>
          <p>
           Ready to volunteer? Terrific! We have a variety of needs and we will soon have a list of precious items to source or purchase.
          </p>

          <h4 style={styles.Link}>Email  <a href="mailto:comingbackbetter@gmail.com">comingbackbetter@gmail.com</a> for details.</h4>
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
		fontFamily: "secondaryFont",
		textAlign:"center"
	},
	Sponsor: {
		marginTop: "3%",
	},
	SponsorInfo: {
		marginTop: "5%",
	},
  Header: {
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "primaryFont",
  },
  Body: {
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
  },
  PatronBox: {
    padding: "4%"
  }
}
