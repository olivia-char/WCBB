import React, { Component } from 'react';
import VinePro from "../assets/vinoPro.jpg"
import Bananas from "../assets/bananasAtLarge.jpg"
import Rodney from "../assets/RodneyStrongVineyards.jpg"
import Mackie from "../assets/Mackie.jpg"
import Benzinger from "../assets/benziger.jpg"
import GlenLyon from "../assets/glenLyon.jpg"
import Imagery from "../assets/imagery.jpg"
import Cclender from "../assets/cclender.jpg"
import Wildfire from "../assets/wildfire.png"
import Norcal from "../assets/norcal.png"
import '../main.css';


export default class Sponsors extends Component {
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
				 <h2>Ed Valentich</h2>
				 &#38;
				 <h2>Sally Staples</h2>
			 </div>
			 <div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
					<h2>Eileen Keister - Farmers Ins.</h2>
			 </div>
			  <div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				 <h2>Jimmy Mona</h2>
				 &#38;
				 <h2>Johnny Capo</h2>
			 </div>
			 <div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
				 <h2>Rodger Fedigan</h2>
			 </div>
				<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
						<h2>Jeff Stevenson</h2>
				 </div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					<h2>Vineyard Custom Arts</h2>
			 </div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					 <img src={Bananas} width={"100%"}/>
				</div>
				<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
					 <img src={Mackie} width={"100%"}/>
				</div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					 <img src={Rodney} width={"100%"}/>
				</div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					 <img src={Wildfire} width={"100%"}/>
				</div>
				<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
					 <img src={Imagery} width={"100%"}/>
				</div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					 <img src={Norcal} width={"100%"}/>
				</div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
					 <img src={VinePro} width={"100%"}/>
				</div>
				<div className="col-sm-2 offset-sm-1 col-md-2 offset-md-1 col-lg-2 offset-lg-1" style={styles.Sponsor}>
					 <img src={Benzinger} width={"100%"}/>
				</div>
				<div className="col-sm-3 offset-sm-1 col-md-3 offset-md-1 col-lg-3 offset-lg-1" style={styles.Sponsor}>
						 <img src={Cclender} width={"100%"}/>
					</div>

				<div className="col-sm-2 offset-sm-5 col-md-2 offset-md-5 col-lg-2 offset-lg-5" style={styles.Sponsor}>
					 <img src={GlenLyon} width={"100%"}/>
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
		marginTop: "2%",
	},
  Header: {
    marginTop: "10%",
    textAlign: "center",
    fontFamily: "primaryFont",
  },
	Title: {
		marginTop: "2%",
		textAlign: "center",
		fontFamily: "secondaryFont"
	},
}
