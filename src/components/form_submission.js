import React,{Component} from 'react'
import {Button,Row,Input} from 'react-materialize'
import MySubmissions from "./mysubmissions"
import Switch from 'react-toggle-switch'
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css" 
class FormSubmission extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {"userSubmissionFlag":false,"switched": false,"switchText":"Non Anonymous"}
	    this.handleSubmit = this.handleSubmit.bind(this)
	  }

	  componentDidMount() {
	  	//For future reference
	  }
	  toggleSwitch = () => {
	    this.setState(prevState => {
	   		const switchTxtState = prevState.switchText === "Anonymous" ? "Non Anonymous" : "Anonymous"
	      return {
	        switched: !prevState.switched,
	        switchText:switchTxtState

	      };
	    });
	  };

	  handleSubmit(e) {
	    e.preventDefault();
	    
	    const formData = {};
	    for (const field in this.refs) {
	      formData[field] = this.refs[field].state.value;
	    }
	    formData.userstatus = this.state.switchText
	    console.log('-->', formData);

	    window.Materialize.toast("Your post was sent successfully", 4000,"",() => {
	    	this.setState({"userSubmissionFlag":true})

	    })
	     
	  }

	render(){
		const MySubmissionsList = this.state.userSubmissionFlag ? (<MySubmissions /> ) : (<MySubmissions /> )
		return(
			   <div className="border">

				<div className="col s6 border collapsible">
					<form className="adjust" onSubmit={this.handleSubmit}>
						<Row>
						  <Input s={10} type='select' label="Category" defaultValue='' ref="category">
						    <option value='Facility'>Facility</option>
						    <option value='Admin'>Admin</option>
						    <option value='L & D'>L & D</option>
						    <option value='Travel'>Travel</option>
						    <option value='IT'>IT</option>
						    <option value='Finance'>Finance</option>
						    <option value='HR'>HR</option>
						    <option value='New Idea'>New Idea</option>
						  </Input>
						</Row>

						<Row>					
						    <Input placeholder="Enter Subject" s={10} label="Subject" ref="subject"/>					    
							<Input type='textarea' label="Description" placeholder="Enter Description" s={10} ref="description"/>
						</Row>
						<Row>

								<Switch onClick={this.toggleSwitch} on={this.state.switched}/>
								<span>{this.state.switchText}</span>
	    						
						</Row>
						<Row>
							<Button waves='light' className="right">Submit</Button>
						</Row>
					</form>
					
				</div>
				<div className="col s6 right collapsible">
				
					{MySubmissionsList}
					
				</div>
			</div>
			)
	}
	
}


export default FormSubmission  