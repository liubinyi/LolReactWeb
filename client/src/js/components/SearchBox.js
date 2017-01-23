import React from "react"
import Moment from 'react-moment';
import { connect } from "react-redux";

import ImageIcon from './ImageIcon';
import RunePage from './RunePage';


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

	getSummonerRunePage(event) {
		event.preventDefault();
		const summonerId = this.props.summonerInfo.id;
		this.props.dispatch(fetchChampionRunePage(summonerId));
	}


	render()
	{
		const {summonerInfo, championStats} = this.props;
		const divStyle = {
			  display: 'inline-block'
		}

		if (summonerInfo.id == 0) {
	      return (
	     	
	      	<div className="row">
	      		<div className="col-md-1">
				</div>
				<div className="col-md-3 introStyle">
					<form>
						<input type="text" placeholder="Your summoner name..." ref="createInput" className="inputBox"/>
						<button className="searchButton" onClick={this.getSummonerInfo.bind(this)}>Load</button>
					</form>
				</div>
				<div className="col-md-7">
			      	<TypeWriter typing={1} minDelay={1}>
			      		<div className="introStyle">
			      			<center>$: Welcome To YasuoGG, here is a quick explanation on how it works!<br />
			      			1. Load Your summonerInfo and Choose a rune page you would like to apply.<br />
			      			2. Choose Your Favorite Chamption then choose a Item from right panel.<br />
			      			3. Click "Apply Effect" to build Your Best Build! <span className="cursor"> |</span></center>
			      			<br />
			      		</div>
	      			</TypeWriter>
      			</div>
				<div className="col-md-1">
				</div>
			</div>
			);
	    }

		return (
			<div className="row">
				<div className="col-md-1">
				</div>
				<div>
				<div className="col-md-3 introStyle">
					<form>
						<input type="text" placeholder="Your summoner name..." ref="createInput" className="inputBox"/>
						<button className="searchButton" onClick={this.getSummonerInfo.bind(this)}>Load</button>
					</form>
				</div>
				<div className="col-md-1">
				</div>
				<div>
				<div className="col-md-1 introStyle" style={divStyle}>
					<ImageIcon iconId={summonerInfo.profileIconId}/>
				</div>
				<div className="col-md-5 introStyle" style={divStyle}>
					<p>{summonerInfo.name} ,Level {summonerInfo.summonerLevel}, LastPlayed: {this.getModifiedDate(summonerInfo.revisionDate)}</p>
					<RunePage buttonClick={this.getSummonerRunePage.bind(this)}/>
				</div>
				</div>
				</div>
				<div className="col-md-1">
				</div>
	      	</div>
		);
	}
}