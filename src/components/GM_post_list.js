import { connect } from 'react-redux';
import React,{Component} from 'react'
import { FetchPostsData,baseURL} from "../action/userpostActions"
import {Button} from 'react-materialize'
import Navbar from "./navbar"

class GMListView extends Component {
	


	  constructor(props) {
	    super(props);
	    this.state = {url:"https://api.mlab.com/api/1/databases/notification/collections/suggestions?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl",
					  postsData:[]}
		this.handleSelect = this.handleSelect.bind(this)
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
	  

	render(){
		return(
			   <div>

			   		  <Navbar />
				      {this.state && this.state.postsData && this.state.postsData.map((item,index) =>
				      	<div className="row" key={index}>
				      	<div className="col s4 border">
					        <span value={item} className="col s10 smallbox" onClick={(item)=>this.handleSelect(item)} >{item.subject}</span>
				        </div>
				        </div>
				      )}
				    
				</div>
			)
	}
	
}

const mapStateToProps = (state) => {
	console.log("------->",state)
	return {
	    posts: state.posts,
	    isLoading:state.postsAreLoading,
	    isError:state.postsHaveError
	};
};

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: (url) => dispatch(FetchPostsData(url))
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(GMListView);
