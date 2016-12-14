import React from 'react';


export default class ImageIcon extends React.Component {
	render() {
		const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'+ this.props.iconId +'.png';
		return (		
			<div>
				<img src={url} />
			</div>			
		);
	}
}