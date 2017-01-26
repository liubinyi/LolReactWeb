import React from 'react';
import { connect } from "react-redux";

import { Button } from 'react-bootstrap';

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo,
    summonerRunePage: store.summonerInfo.summonerRunePage,
    runePageLoaded : store.summonerInfo.runePageLoaded
  };
})

export default class RunePage extends React.Component {

	generateRuneStats() {
		//get slots here 
		//and fire up an event with all the stats to update chamption stats
	}

	render() {

		const {summonerInfo, summonerRunePage, runePageLoaded } = this.props;

		if (!runePageLoaded) {
			return (
				<div className="filterButtons">
					<button onClick={this.props.buttonClick}>Load Your Rune Page </button>
				</div>
			);
		}

		const summonerId = this.props.summonerId;
		const runePages = this.props.summonerRunePage[summonerId].pages.map(runePage =>
	   			 <div id={runePage.id} key={runePage.id} className="runePage">
	   			 	<Button bsStyle="success">{runePage.name} </Button>
				 </div>
		);

		return (
			<div>
				{runePages}
			</div>
		);
	}
}