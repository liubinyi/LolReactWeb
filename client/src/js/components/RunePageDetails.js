import React from 'react';
import SingleTableRow from './SingleTableRow';
import _ from 'lodash';


export default class RunePageDetails extends React.Component {


	render() {

		if (_.isEmpty(this.props.runeDetails)) {
			return (
				<div className="runeDetailsEmpty">
					<p>You can load your summonor info to apply rune effects. </p>
				</div>
			);
		}
		//TODO style the UI
		let stats = this.props.runeDetails.stats;

		const runeGraphs = Object.keys(stats).map(itemKey =>
			<SingleTableRow key={itemKey} itemKey={itemKey} itemValue={stats[itemKey]} isRunePage={true}/>
		);

		return (
  			 <div className="row">
  			 	<table className="table table-condensed">
  			 		<thead>
					      <tr>
					        <th>Rune Attributes</th>
					        <th>Value</th>
					      </tr>
				    </thead>
				    <tbody>
				    	{runeGraphs}
				    </tbody>
  			 	</table>
			</div>
		);
	}
}