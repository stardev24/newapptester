import React,{Component} from 'react'
import {Row} from 'react-materialize'

class SelectDisplayPanel extends Component {
	constructor(props){
		super(props)
		console.log("in SelectDisplayPanel --->",this.props)
	}

	render(){
		const panelFlag = this.props.selectedPost ? true : false
		if(panelFlag){
			return(

					      <div className="col s8">

							  <div className="card">
							    <div className="card-content">
							      <span className="card-title activator grey-text text-darken-4">{this.props.selectedPost.subject}</span>
							      <Row>
							      	<p><span className="thick">Description:</span> {this.props.selectedPost.body}</p>
							      </Row>
							      <Row>
							      	<p> <span className="thick">Status : </span>{this.props.selectedPost.status}</p>
							      </Row>
							      <Row>
							      	<p><span className="thick">Created Date  :</span> {this.props.selectedPost.createdDate}</p>
							      </Row>
							    </div>

							  </div>
					      </div>


				)			
		}else{
			return(

					<div className="col s8">
						<p>No panel to display</p>
					</div>

				)
			
		}
	}	
}


export default SelectDisplayPanel
