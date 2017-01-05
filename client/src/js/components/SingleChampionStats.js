import React from 'react';
import ImageIcon from './ImageIcon';


export default class SingleChampionStats extends React.Component {
	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block',
		 opacity: 0.5,
		 backgroundColor: 'black',
		 marginRight: '10'
		}

		const graphs = Object.values(this.props.championStatsInfo).map(champ =>
	   			 <div id={champ.key} key={champ.id} style={divStyle} title={champ.name} onClick={this.props.event} onMouseEnter={(event) => this.props.hover(1,event)} onMouseLeave={(event) => this.props.hover(0.5,event)}>
	   			 	<ImageIcon championKey={champ.key} />	
				 </div>
		);

		const mainDivStyle = {
			 	 width: '500',
			 	 backgroundColor:'black',
			 	 float : 'left'
		}
		return (
			<div style={mainDivStyle}>
				{graphs}
			</div>
		);
	}
}