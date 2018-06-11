import React,{Component} from 'react'
import GMListView from "./GM_post_list"


class MySubmissions extends Component {
	render(){

		return(
				<div>
					<p>List view for User Submissions</p>

					<GMListView />
					
				</div>

			)
	}
	
}


export default MySubmissions