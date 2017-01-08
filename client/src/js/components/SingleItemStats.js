import React from 'react';
import ItemImageIcon from './ItemImageIcon';


export default class SingleItemStats extends React.Component {
	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block',
		 backgroundColor: 'black',
		 marginRight: '10'
		}

		const itemGraphs = Object.values(this.props.itemStatsInfo).map(item =>
	   			 <div id={item.id} key={item.id} style={divStyle} onClick={this.props.click}>
	   			 	<ItemImageIcon itemKey={item.id} />	
				 </div>
		);

		const mainDivStyle = {
			 	 width: '500',
			 	 backgroundColor:'black',
			 	 float: 'right'

		}
		return (
			<div style={mainDivStyle}>
				{itemGraphs}
			</div>
			
		);
	}
}