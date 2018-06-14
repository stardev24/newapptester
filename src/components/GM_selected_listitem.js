import React,{Component} from 'react'
import {Collection,CollectionItem} from 'react-materialize'

class GMSelectedListItemView extends Component {
	constructor(props){
		super(props)
		this.state = {selectedTabId:0}
		this.triggerSelectRecord = this.triggerSelectRecord.bind(this)
	}

	componentDidMount(){

	}
	triggerSelectRecord(e){
		    e.preventDefault();
    		this.props.selectListRecord(e.target.id,parseInt(e.target.dataset.tabid,10))

	}

	render(){

		const listFlag = this.props.records?true:false

		if(listFlag){
			return(
					<div className="col s3">
						<Collection>
						{this.props && this.props.records && this.props.records.map((item,index) =>

					      		<CollectionItem key={index} 
            					 className={this.props.activeTabId === index ?'active':'nonactive'}
					      		 onClick={this.triggerSelectRecord} data-tabid={index} id={item._id.$oid}>{item.subject}</CollectionItem>					        

					      )}
						</Collection>
					</div>
			)			
		}else{
			return(
				  <div className="preloader-wrapper small active">
				    <div className="spinner-layer spinner-green-only">
				      <div className="circle-clipper left">
				        <div className="circle"></div>
				      </div><div className="gap-patch">
				        <div className="circle"></div>
				      </div><div className="circle-clipper right">
				        <div className="circle"></div>
				      </div>
				    </div>
				  </div>

			)
		}

	}
	
}


export default GMSelectedListItemView
