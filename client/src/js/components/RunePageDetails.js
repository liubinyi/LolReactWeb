import React from 'react';
import SingleTableRow from './SingleTableRow';


export default class RunePageDetails extends React.Component {


	render() {

		//TODO style the UI
		let stats = this.props.runeDetails.stats;

		const runeGraphs = Object.keys(stats).map(itemKey =>
			<SingleTableRow key={itemKey} itemKey={itemKey} itemValue={stats[itemKey]}/>
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