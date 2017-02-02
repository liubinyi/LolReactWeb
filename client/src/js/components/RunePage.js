import React from 'react';
import { connect } from "react-redux";

import { Button } from 'react-bootstrap';
import { fetchSingleRuneStats } from "../actions/runePageAction";

import { arrayToCountHash} from "../Helper/helper";

import {runePages} from "../Helper/staticRunePages";

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
		let runeIds = Object.keys(runeHash);

		const runeStats = _.pickBy(runePages.data, function(value, key) {
          return (runeIds.includes(key));
        });

    	let stats = {
		  	"health" : 0,
		  	"ablity" : 0,
		  	"damage" : 0,
		  	"attackspeed" : 0,
		  	"cooldown": 0,
		  	"armor": 0,
		  	"magicPeneration": 0,
		  	"armorPeneration": 0,
		  	"critDamage" : 0,
		  	"critChance" : 0,
		  	"movementSpeed" : 0,
		  	"lifeSteal" : 0,
		  	"magicResistance" : 0
		  }
        console.log(runeStats);
        //next step create a function to generate status
        //build an object with all the stats
        //fire up an action to change the state and display the state
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