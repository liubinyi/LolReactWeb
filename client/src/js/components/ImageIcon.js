import React from 'react';


export default class ImageIcon extends React.Component {
	render() {


		if (this.props.iconId != null &&  this.props.iconId != 0) {
			const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'+ this.props.iconId +'.png';
			const imageStyle = {
			  width: '50',
			  height: '50'
			};
			return (		
				<div>
					<img src={url} style={imageStyle}/>
				</div>			
			);
		}

		if (this.props.championKey != null) {
			const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'+ this.props.championKey +'.png';
			const imageStyle = {
			  width: '50',
			  height: '50',
			};

			const divStyle = {
		 	  width: '50',
			  height: '50',
			  display: 'inline-block'
			}

			return (		
				<div style={divStyle}>
					<img src={url} style={imageStyle} className={this.props.championKey}/>
				</div>			
			);
		}
	}
}