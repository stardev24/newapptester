import React,{Component} from 'react'
import StaticContent from "./static_content"
import FormSubmission from "./form_submission"
import Navbar from "./navbar"
import "./css/custom_styles.css"

class LandingPage extends Component {
	render(){
		return(
				<div>
					<Navbar />
				    <div className="row">
				      <div className="col s12">
				      		<StaticContent />
				      		<FormSubmission />
				      </div>
				    </div>				
				</div>

			)
	}
	
}


export default LandingPage    





