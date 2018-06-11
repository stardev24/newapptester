import React,{Component} from 'react'
import {Collapsible, CollapsibleItem} from 'react-materialize'

class StaticContent extends Component {
	render(){
		return(
				<div className="col s6 border">
					<Collapsible>
					  <CollapsibleItem header='First' icon='filter_drama'>
					    Lorem ipsum dolor sit amet.
					  </CollapsibleItem>
					  <CollapsibleItem header='Second' icon='place'>
					    Lorem ipsum dolor sit amet.
					  </CollapsibleItem>
					  <CollapsibleItem header='Third' icon='whatshot'>
					    Lorem ipsum dolor sit amet.
					  </CollapsibleItem>
					</Collapsible>
				</div>

			)
	}
	
}


export default StaticContent  