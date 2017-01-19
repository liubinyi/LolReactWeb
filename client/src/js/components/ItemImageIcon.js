import React from 'react';


export default class ItemImageIcon extends React.Component {
	render() {


		if (this.props.itemKey != null) {
			const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/'+ this.props.itemKey +'.png';
			const imageStyle = {
			  width: '50',
			  height: '50',
			  marginBottom :'30',
			  opacity: '0.9'
			};

			const divStyle = {
		 	  width: '50',
			  height: '50',
			  display: 'inline-block',
			}

			return (		
				<div style={divStyle}>
					<img src={url} style={imageStyle} id={this.props.itemKey} className="hover" />
				</div>			
			);
		} else {
			return (
				<div>
				</div>
			);
		}
	}
}