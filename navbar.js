import React,{Component} from 'react'


class Navbar extends Component {
	render(){

		return(
				<div>
				  <nav>
				    <div class="nav-wrapper">
				    <ul class="left hide-on-med-and-down">
				    <li>
				      <a href="#!" class="brand-logo left"><i class="material-icons">cloud</i>GM Central</a>
				    </li>
				    </ul>
				      <ul class="right hide-on-med-and-down">
				      	<li>Welcome user</li>
				        <li><i class="material-icons">more_vert</i></li>
				      </ul>
				    </div>
				  </nav>				
					
				</div>

			)
	}
	
}


export default Navbar