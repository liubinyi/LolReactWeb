import React from 'react';
import { connect } from "react-redux";

import { Button } from 'react-bootstrap';

import { arrayToCountHash} from "../Helper/helper";

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo,
    summonerRunePage: store.summonerInfo.summonerRunePage,
    runePageLoaded : store.summonerInfo.runePageLoaded
  };
})

export default class RunePage extends React.Component {

	generateRuneStats(runePage) {
		//get slots here 
		const slot = runePage.slots;

		//create a hash with count of slot and it's id
		let runeHash = arrayToCountHash(slot);

		//fire up an action to display a new UI

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
	   			 <div id={runePage.id} key={runePage.id} rune={runePage} className="runePage">
	   			 	<Button onClick={this.generateRuneStats.bind(this, runePage)} bsStyle="success">{runePage.name} </Button>
				 </div>
		);

		return (
			<div>
				{runePages}
			</div>
		);
	}
}