import React from 'react';
import { connect } from "react-redux";

import { Button } from 'react-bootstrap';
import { fetchSingleRuneStats,displayRunePageDetails } from "../actions/runePageAction";

import { GetSingleRunePageStatsDetails, arrayToCountHash} from "../Helper/helper";

import {runePages} from "../Helper/staticRunePages";

import RunePageDetails from './RunePageDetails';

import {RenderIf} from "../Helper/helper";

import _ from 'lodash';

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo,
    summonerRunePage: store.summonerInfo.summonerRunePage,
    runePageLoaded : store.summonerInfo.runePageLoaded,
    runePageDetails : store.summonerInfo.runePageDetails
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
		  	"magicResistance" : 0,
		  	"ArmorPerLevel":0,
		  	"CritChancePerLevel" : 0,
		  	"CritDamagePerLevel" : 0,
		  	"HealthPerLevel" : 0,
		  	"MagicDamagePerLevel" : 0,
		  	"MagicPenetrationPerLevel" : 0,
		  	"MovementSpeedPerLevel" : 0,
		  	"PhysicalDamagePerLevel" : 0,
		  	"rFlatSpellBlockModPerLevel" : 0,
		  	"AttackSpeedPercentPerLevel" : 0,
		  	"CooldownPercentPerLevel" : 0,
		  	"MagicPenetrationPercentPerLevel" : 0,
		  	"MovementSpeedPercent" : 0,
		  	"percentHealth" : 0
		}


		//key is rune id, value is rune stats
		_.forOwn(runeStats, function(value, key) {
			let tag = Object.keys(value.stats)[0];
			stats = GetSingleRunePageStatsDetails(tag, stats, value.stats, runeHash[key]);
		});


		let filterStats = {};

		_.forOwn(stats, function(value, key) {
			if (value != 0) {
				filterStats[key] = value;
			}
		});

		let details = {
			name: runePage.name,
			stats: filterStats
		}

		//display UI
		this.props.dispatch(displayRunePageDetails(details));
	}
	render() {

		const {summonerInfo, summonerRunePage, runePageLoaded ,runePageDetails} = this.props;

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

		const renderIf = RenderIf();
		const ifRenderRunePageDetails = renderIf(!_.isEmpty(runePageDetails));

		return (
			<div>
				{runePages}			
				{ifRenderRunePageDetails(		
					<RunePageDetails runeDetails={runePageDetails}/>
				)}

			</div>

		);
	}
}