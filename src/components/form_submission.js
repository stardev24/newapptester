import React,{Component} from 'react'
import {Button,Row,Input} from 'react-materialize'
import MySubmissions from "./mysubmissions"

class FormSubmission extends Component {
	  constructor(props) {
	    super(props);
	  }

	  componentDidMount() {

	  }



	render(){
		return(
			   <div className="border">
			   <h5>Create Grievance</h5>
				<div className="col s6 border">
					<Row>
					  <Input s={10} type='select' label="Category" defaultValue='2'>
					    <option value='1'>Facility</option>
					    <option value='2'>Admin</option>
					    <option value='3'>L & D</option>
					    <option value='4'>Travel</option>
					    <option value='5'>IT</option>
					    <option value='6'>Finance</option>
					    <option value='7'>HR</option>
					    <option value='8'>New Idea</option>
					  </Input>
					</Row>

					<Row>					
					    <Input placeholder="Enter Subject" s={10} label="Subject" />					    
						<Input type='textarea' label="Description" placeholder="Enter Description" s={10} />
					</Row>
					<Row>
							<Input name='usertype' type='radio' value='Anonymous' label='Anonymous' />
						    <Input name='usertype' type='radio' value='Non Anonymous' label='Non Anonymous' />
    						
					</Row>
					<Row>
						<Button waves='light' className="right">Submit</Button>
					</Row>
				</div>
				<div className="col s6 right">
					<MySubmissions />
				</div>
			</div>
			)
	}
	
}


export default FormSubmission  