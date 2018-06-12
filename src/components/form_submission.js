import React,{Component} from 'react'
import {Button,Row,Input} from 'react-materialize'
import MySubmissions from "./mysubmissions"
import { Field, reduxForm } from 'redux-form'

class FormSubmission extends Component {
	  constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this)
	  }

	  componentDidMount() {

	  }

	  handleSubmit(e) {
	    e.preventDefault();
	    
	    const formData = {};
	    for (const field in this.refs) {
	      formData[field] = this.refs[field].state.value;
	    }
	    console.log('-->', formData);
	  }

	render(){
		return(
			   <div className="border">
			   <h5>Create Grievance</h5>
				<div className="col s6 border">
					<form onSubmit={this.handleSubmit}>
						<Row>
						  <Input s={10} type='select' label="Category" defaultValue='2' ref="category">
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
								<Input name='usertype' type='radio' value='Anonymous' label='Anonymous' ref="anonymous"/>
							    <Input name='usertype' type='radio' value='Non Anonymous' label='Non Anonymous' ref="nonanonymous"/>
	    						
						</Row>
						<Row>
							<Button waves='light' className="right">Submit</Button>
						</Row>
					</form>
				</div>
				<div className="col s6 right">
					<MySubmissions />
				</div>
			</div>
			)
	}
	
}


export default FormSubmission  