import React,{Component} from 'react'
import "./css/custom_styles.css"
import Navbar from "./navbar"
import { connect } from 'react-redux';
import { FetchSinglePost} from "../action/userpostActions"
import {Row} from 'react-materialize'



class PostDetailsPage extends Component {
	  constructor(props) {
	    super(props);
	  	const id = this.props.match.params.id ? this.props.match.params.id : ""
	    this.state = {url:'https://api.mlab.com/api/1/databases/notification/collections/suggestions/'+id+'?apiKey=lnns9ZsrNRgq7odDP7WSAeFqwaToPRFl',
					  singlePostData:[]}

	  }

	  componentDidMount() {
		this.props.fetchData(this.state.url).then((data) => {

	  		this.setState({singlePostData:data.post})
	  	})
	  }


	render(){
		return(
				<div>
					<Navbar/>
				    <div className="row">
				      <div className="col s10">

						  <div className="card">
						    <div className="card-content">
						      <span className="card-title activator grey-text text-darken-4">{this.state.singlePostData.subject}</span>
						      <Row>
						      	<p><span className="thick">Description:</span> {this.state.singlePostData.body}</p>
						      </Row>
						      <Row>
						      	<p> <span className="thick">Status : </span>{this.state.singlePostData.status}</p>
						      </Row>
						      <Row>
						      	<p><span className="thick">Created Date  :</span> {this.state.singlePostData.createdDate}</p>
						      </Row>
						    </div>

						  </div>




				      </div>

				    </div>				
				</div>

			)
	}
	
}

const mapStateToProps = (state) => {

	return {
	    post: state.singlePostData,
	    isLoading:state.postsAreLoading,
	    isError:state.postsHaveError
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(FetchSinglePost(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);


 