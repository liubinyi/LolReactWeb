import React from "react"
import Moment from 'react-moment';
import { connect } from "react-redux";

import ImageIcon from './ImageIcon';


import { fetchSummoner } from "../actions/summonerInfoAction";

import { Button } from 'react-bootstrap';

import TypeWriter from 'react-typewriter';

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo,
    championStats: store.championStats
  };
})

export default class SearchBox extends React.Component {

	getSummonerInfo(event) {
		event.preventDefault();
		const summonerName = this.refs.createInput.value;
		this.props.dispatch(fetchSummoner(summonerName));
	}

	getModifiedDate(revisionDate) {
		const date = new Date(revisionDate);
		return (
			<Moment format="YYYY/MM/DD HH:mm">{revisionDate}</Moment>
		);
	}


	render()
	{
		const {summonerInfo, championStats} = this.props;
		const divStyle = {
			  display: 'inline-block'
		}

		if (summonerInfo.id == 0) {
	      return (
	     	
	      	<div>
		      	<TypeWriter typing={1} minDelay={1}>
		      		<div className="introStyle">
		      			<center>Welcome To YasuoGG, here is a quick explanation on how it works!<br />
		      			1. Load Your summonerInfo and Choose a rune page you would like to apply.<br />
		      			2. Choose Your Favorite Chamption then choose a Item from right panel.<br />
		      			3. Click "Apply Effect" to build Your Best Build! <span className="cursor"> | </span></center>
		      		</div>
      			</TypeWriter>
				<form>
					<input type="text" placeholder="summoner name" ref="createInput" className="inputBox"/>
					<button className="searchButton" onClick={this.getSummonerInfo.bind(this)}>Enter Your Summonor Name...</button>
				</form>
			</div>
			);
	    }

		return (
			<div>
				<form>
					<input type="text" placeholder="summoner name" ref="createInput" className="inputBox"/>
					<button className="searchButton" onClick={this.getSummonerInfo.bind(this)}>Enter Your Summonor Name...</button>
				</form>
				<div style={divStyle}>
					<ImageIcon iconId={summonerInfo.profileIconId}/>
				</div>
				<div style={divStyle}>
					<p>{summonerInfo.name} ,Level {summonerInfo.summonerLevel}, LastPlayed: {this.getModifiedDate(summonerInfo.revisionDate)}</p>
				</div>
	      	</div>
		);
	}
}