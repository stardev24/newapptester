import React,{Component} from 'react'
import {Collection,CollectionItem} from 'react-materialize'

class GMSelectedListItemView extends Component {
	constructor(props){
		super(props)
		this.triggerSelectRecord = this.triggerSelectRecord.bind(this)
	}

	componentDidMount(){
		console.log("List item for GM ---->",this.props)
	}
	triggerSelectRecord(e){
		    e.preventDefault();
		    console.log("In selection taget -->",e)
    		this.props.selectListRecord(e.target.id)
	}

	render(){

		return(




					<div className="col s3">
						<Collection>
						{this.props && this.props.records && this.props.records.map((item,index) =>

					      		<CollectionItem key={index} onClick={this.triggerSelectRecord} id={item._id.$oid}>{item.subject}</CollectionItem>					        

					      )}
						</Collection>
					</div>


			)
	}
	
}


export default GMSelectedListItemView
