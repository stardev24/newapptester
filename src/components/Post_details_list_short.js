import { connect } from 'react-redux';
import React,{Component} from 'react'
import { FetchPostsData,baseURL} from "../action/userpostActions"
import {Button} from 'react-materialize'


class PostDetailsShortFormat extends Component {
	


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

		const tableFlag = this.state.postsData.length >0 ? true : false
		if(tableFlag){
			return(

				   <div>
				   			<h5>My Submissions</h5>
					      	<div className="row">
					      	<div className="col s12 border">
						        <span className="col s6">Subject</span>
						        <span className="col s3">Creation Date</span>
					        </div>
					        </div>
					        	

					      {this.state && this.state.postsData && this.state.postsData.map((item,index) =>
					      	<div className="row" key={index}>
					      	<div className="col s12 border">
						        <span className="col s6"><a href={'/detail/suggestion/' + item._id.$oid}>{item.subject}</a></span>
						        <span className="col s3">{item.createdDate}</span>
					        </div>
					        </div>
					      )}
					    
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsShortFormat);
