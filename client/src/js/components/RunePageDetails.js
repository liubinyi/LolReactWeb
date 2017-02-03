import React from 'react';


export default class RunePageDetails extends React.Component {


	render() {

		//TODO style the UI
		let stats = this.props.runeDetails.stats;

		const runeGraphs = Object.keys(stats).map(itemKey =>
			<tr key = {itemKey}>
	        	<td>{itemKey}</td>
	        	<td> + {stats[itemKey]}</td>
	        </tr>
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