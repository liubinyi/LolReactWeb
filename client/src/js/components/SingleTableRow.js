import React from 'react';


export default class SingleTableRow extends React.Component {


	render() {

		let itemKey = this.props.itemKey;
		let itemValue = parseFloat(this.props.itemValue).toFixed(1);

		if (itemKey === "attackspeed" || itemKey === "cooldown" || itemKey === "lifeSteal") {
			itemKey += "%"
			itemValue += "%";
		}

		return (
  			 <tr key={itemKey}>
	        	<td>{itemKey}</td>
	        	<td> + {itemValue}</td>
	        </tr>
		);
	}
}