import { connect } from 'react-redux';
import React,{Component} from 'react'
import { FetchPostsData,baseURL} from "../action/userpostActions"
import {Button,Row} from 'react-materialize'
import Navbar from "../components/navbar"
import GMSelectedListItemView from "../components/GM_selected_listitem"
import SelectDisplayPanel from "../components/select_display_panel"

class GMListContainer extends Component {
	


	  constructor(props) {
	    super(props);
	    this.state = {url:"https://api.mlab.com/api/1/databases/notification/collections/suggestions?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl",
					  postsData:[],selectedRecord:null,selectedIndex:null}
		this.handleSelect = this.handleSelect.bind(this)
		this.selectListRecord = this.selectListRecord.bind(this)
	  }

	  componentDidMount() {
	  	this.props.fetchData(this.state.url).then((data) => {
	  		console.log("----state----",this.state)
	  		console.log("----props----",this.props)
	  		this.setState({postsData:data.posts})
	  	})
	
	  }
	  
	  handleSelect(itemData){
	  	console.log("----event data----",itemData.target.getAttribute("value"))
	  }
	  
	selectListRecord(recordId){


		      const record = this.props.posts.find(recordItem => recordItem._id.$oid === recordId)
		      this.setState({selectedRecord: record}) 			

	}  

	render(){
		return(
			   <div>

			   		  <Navbar />
			   		  <div className="row">
				   		  <GMSelectedListItemView records={this.state.postsData} selectListRecord={this.selectListRecord}/>
				   		  <SelectDisplayPanel selectedPost={this.state.selectedRecord} />
			   		  </div>

				    
				</div>
			)
	}
	
}

const mapStateToProps = (state) => {
	console.log("------->",state)
	return {
	    posts: state.postsData,
	    isLoading:state.postsAreLoading,
	    isError:state.postsHaveError
	};
};

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: (url) => dispatch(FetchPostsData(url))
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(GMListContainer);
