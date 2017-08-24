import React from 'react';
import {RenderIf} from "../Helper/helper";


export default class ItemImageIcon extends React.Component {
	render() {

		const renderIf = RenderIf();
		const ifRenderItem = renderIf(this.props.itemKey != null);
		const itemUrl = 'http://ddragon.leagueoflegends.com/cdn/7.17.1/img/item/'+ this.props.itemKey +'.png';
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
			<div  style={divStyle}>
				{ifRenderItem(
					<img src={itemUrl} style={imageStyle} id={this.props.itemKey} className="hover" />
				)}
			</div>

		);
	}
}
