import React,{Component} from 'react'


class Navbar extends Component {
	render(){

		return(
				<div>
				  <nav>
				    <div className="nav-wrapper">
				    <ul className="left hide-on-med-and-down">
				    <li>
				      <a href="#!" className="brand-logo left">AppInfo</a>
				    </li>
				    </ul>
				      <ul className="right hide-on-med-and-down">
				      	<li>Welcome user</li>
				        <li><i className="material-icons">more_vert</i></li>
				      </ul>
				    </div>
				  </nav>				
					
				</div>

			)
	}
	
}


export default Navbar