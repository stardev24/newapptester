import React,{Component} from 'react'
import StaticContent from "./static_content"
import FormSubmission from "./form_submission"
import "./css/custom_styles.css"

class PostDetailsPage extends Component {
	render(){
		return(
				<div>
				    <div className="row">
				      <div className="col s12">
				      		<StaticContent />
				      </div>
				    </div>				
				</div>

			)
	}
	
}


export default PostDetailsPage 