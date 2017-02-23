import React from 'react';
import {RenderIf} from "../Helper/helper";


export default class ImageIcon extends React.Component {
	render() {

		const renderIf = RenderIf();

		const ifRenderProfile = renderIf(this.props.iconId != null &&  this.props.iconId != 0);
		const ifRenderChamption = renderIf(this.props.championKey != null && this.props.loadFullChampImg == null);
		const ifRenderFullChamp = renderIf(this.props.loadFullChampImg == true);

		const profileUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'+ this.props.iconId +'.png';
		const championUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'+ this.props.championKey +'.png';
		const fullChampionUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+ this.props.championKey + '_0' +'.jpg';


		const profileStyle = {
			  width: '50',
			  height: '50'
		};

		const championStyle = {
			  width: '50',
			  height: '50',
			  border: '1px solid #61dafb',
		};

		return (
			<div>
				{ifRenderProfile(				
					<img src={profileUrl} className="profileStyle"/>				
				)}

				{ifRenderChamption(
						<img src={championUrl} style={championStyle} className={this.props.championKey} />
					
				)}
				{ifRenderFullChamp(
					<img src={fullChampionUrl} className={this.props.championKey + ' ' + "FullChampImg"} />	
				)}
			</div>	

		);
	}
}

	