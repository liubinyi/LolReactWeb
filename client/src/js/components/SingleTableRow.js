import React from 'react';


export default class SingleTableRow extends React.Component {


	render() {

		let itemKey = this.props.itemKey;
		let itemValue = itemKey == "attackspeed" ? parseFloat(this.props.itemValue).toFixed(2):parseFloat(this.props.itemValue).toFixed(1);

		if (itemKey === "cooldown" || itemKey === "lifeSteal") {
			itemKey += "%"
			itemValue += "%";
		}

		if (itemKey === "attackspeed" && this.props.isRunePage == true) {
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