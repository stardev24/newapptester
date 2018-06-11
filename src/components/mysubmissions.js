import React,{Component} from 'react'
import PostDetailsShortFormat from "./Post_details_list_short"


class MySubmissions extends Component {
	render(){

		return(
				<div>
					<h5>My Submissions</h5>

					<PostDetailsShortFormat />
					
				</div>

			)
	}
	
}


export default MySubmissions