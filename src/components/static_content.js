import React,{Component} from 'react'
import {Collapsible, CollapsibleItem} from 'react-materialize'

class StaticContent extends Component {
	render(){
		return(
				<div className="col s6 border">
					<h5>Disclaimer</h5>
					<Collapsible>
					  <CollapsibleItem header='Tort law' icon='filter_drama'>
					    A disclaimer is generally any statement intended to specify or delimit the scope of rights and obligations 
					    that may be exercised and enforced by parties in a legally recognized relationship. In contrast to other
					     terms for legally operative language, the term disclaimer usually implies situations that involve some 
					     level of uncertainty, waiver, or risk.
					    A disclaimer is generally any statement intended to specify or delimit the scope of rights and obligations 
					    that may be exercised and enforced by parties in a legally recognized relationship. In contrast to other
					     terms for legally operative language, the term disclaimer usually implies situations that involve some 
					     level of uncertainty, waiver, or risk.
					  </CollapsibleItem>
					  <CollapsibleItem header='Patent law' icon='filter_drama'>
					    A disclaimer may specify mutually agreed and privately arranged terms and conditions as part of a contract;
					     or may specify warnings or expectations to the general public (or some other class of persons) in order 
					     to fulfill a duty of care owed to prevent unreasonable risk of harm or injury. Some disclaimers are intended 
					     to limit exposure to damages after a harm or injury has already been suffered. Additionally, 
					     some kinds of disclaimers may represent a voluntary waiver of a right or obligation that may be owed 
					     to the disclaimant.
					    A disclaimer may specify mutually agreed and privately arranged terms and conditions as part of a contract;
					     or may specify warnings or expectations to the general public (or some other class of persons) in order 
					     to fulfill a duty of care owed to prevent unreasonable risk of harm or injury. Some disclaimers are intended 
					     to limit exposure to damages after a harm or injury has already been suffered. Additionally, 
					     some kinds of disclaimers may represent a voluntary waiver of a right or obligation that may be owed 
					     to the disclaimant.
					  </CollapsibleItem>
					  <CollapsibleItem header='Estate law' icon='whatshot'>
					   Disclaimers vary in terms of their uniformity. Some may vary depending on the specific context and parties involved, while other types of 
					   disclaimers may strictly adhere to a uniform and established set of formalities that are rarely or never modified, except under official
					    authority. Some of these formal disclaimers are required pursuant to industry regulation, qualification for protection under
					    a safe harbor, and other situations where the exact wording of a particular clause or document may be dispositive in the event of a legal dispute.
					    A disclaimer may specify mutually agreed and privately arranged terms and conditions as part of a contract;
					     or may specify warnings or expectations to the general public (or some other class of persons) in order 
					     to fulfill a duty of care owed to prevent unreasonable risk of harm or injury.
					     to the disclaimant. 
					  </CollapsibleItem>
					</Collapsible>
				</div>

			)
	}
	
}


export default StaticContent  