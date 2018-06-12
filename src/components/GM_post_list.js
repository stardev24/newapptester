import { connect } from 'react-redux';
import React,{Component} from 'react'
import { FetchPostsData,baseURL} from "../action/userpostActions"
import {Button} from 'react-materialize'


class GMListView extends Component {
	


	  constructor(props) {
	    super(props);
	    this.state = {url:"https://api.mlab.com/api/1/databases/notification/collections/suggestions?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl",
					  postsData:[]}
	  }

	  componentDidMount() {
	  	this.props.fetchData(this.state.url).then((data) => {
	  		console.log("----state----",this.state)
	  		console.log("----props----",this.props)
	  		this.setState({postsData:data.posts})
	  	})
	
	  }

	render(){
		return(
			   <div>
				      	<div className="row">
				      	<div className="col s12 border">
					        <span className="col s4">Author</span>
					        <span className="col s4">Status</span>
					        <span className="col s4">Details</span>
				        </div>
				        </div>


				      {this.state && this.state.postsData && this.state.postsData.map(item =>
				      	<div className="row">
				      	<div className="col s12 border">
					        <span className="col s4">{item.author}</span>
					        <span className="col s4">{item.status}</span>
					        <span className="col s4"><Button className="test">Show More</Button></span>
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
