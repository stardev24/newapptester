import { connect } from 'react-redux';
import React,{Component} from 'react'
import { FetchPostsData} from "../action/userpostActions"

import Navbar from "../components/navbar"
import GMSelectedListItemView from "../components/GM_selected_listitem"
import SelectDisplayPanel from "../components/select_display_panel"

class GMListContainer extends Component {
	


	  constructor(props) {
	    super(props);
	    this.state = {url:"https://api.mlab.com/api/1/databases/notification/collections/suggestions?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl",
					  postsData:[],selectedRecord:null,selectedIndex:null,defaultPost:null,defaultIndex:0}
		this.selectListRecord = this.selectListRecord.bind(this)
	  }

	  componentDidMount() {
	  	this.props.fetchData(this.state.url).then((data) => {
	  		this.setState({postsData:data.posts,defaultPost:data.posts[0]})
	  	})
	
	  }
	  
	selectListRecord(recordId,listItemId){


		      const record = this.props.posts.find(recordItem => recordItem._id.$oid === recordId)
		      this.setState({selectedRecord: record,selectedIndex:listItemId}) 			

	}  

	render(){
		return(
			   <div>

			   		  <Navbar />
			   		  <div className="row">

				   		  <GMSelectedListItemView 
				   		  records={this.state.postsData} 
				   		  selectListRecord={this.selectListRecord} 
				   		  activeTabId={this.state.selectedIndex ? this.state.selectedIndex : this.state.defaultIndex}/>

				   		  <SelectDisplayPanel 
				   		  selectedPost={this.state.selectedRecord ? this.state.selectedRecord : this.state.defaultPost} />
			   		  </div>

				    
				</div>
			)
	}
	
}

const mapStateToProps = (state) => {

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
