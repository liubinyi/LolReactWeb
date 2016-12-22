import React from 'react';
import ImageIcon from './ImageIcon';


export default class SingleChampionStats extends React.Component {
	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block'
		}

		const graphs = Object.values(this.props.championStatsInfo).map(champ =>
	   			 <div key={champ.id} style={divStyle} title={champ.name} onClick={this.props.event}>
	   			 	<ImageIcon championKey={champ.key} />	
				 </div>
		);

		const mainDivStyle = {
			 	 width: '400',
		}
		return (
			<div style={mainDivStyle}>
				{graphs}
			</div>
		);
	}
}