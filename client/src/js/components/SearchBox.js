import React from "react"
import Moment from 'react-moment';
import { connect } from "react-redux";

import ImageIcon from './ImageIcon';


import { fetchSummoner } from "../actions/summonerInfoAction";

import { Button } from 'react-bootstrap';

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