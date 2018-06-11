import React,{Component} from 'react'
import {Button, Icon,Row,Input} from 'react-materialize'

class FormSubmission extends Component {
	  constructor(props) {
	    super(props);
	  }

	  componentDidMount() {

	  }



	render(){
		return(
				<div className="col s6 border">

					<Row>
					    <Input placeholder="Enter Subject" s={10} label="Subject" />					    
						<Input type='textarea' label="Body" placeholder="Enter Description" s={10} />
					</Row>
					<Row>
						    <Input name='usertype' type='radio' value='Normal' label='Normal' />
    						<Input name='usertype' type='radio' value='Anonymous' label='Anonymous' />
					</Row>
					<Row>
						<Button waves='light' className="right">Submit</Button>
					</Row>
				</div>

			)
	}
	
}


export default FormSubmission  