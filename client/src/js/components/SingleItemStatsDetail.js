import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import ItemImageIcon from './ItemImageIcon';

import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import { applyPercentageItemEffect,applyFlatItemEffect} from "../Helper/helper";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class SingleItemStatsDetail extends React.Component {

	ItemAdded(itemId, newChamptionStats) {
		//this.props.dispatch(ItemAddedToCurrentChamption(itemId, newChamptionStats));
	}

	generateStatsObject(itemStats, champtionStats) {
		//this function will be a swtich statement
		let newChamptionStats = {...champtionStats};
		_.forIn(itemStats.stats, function(value, key) {
			switch (key) {

			  /*****************all percentage case************/
		      case "PercentAttackSpeedMod": {
		      	//attack speed by percent 40%
		      	newChamptionStats.attackspeed = applyPercentageItemEffect(champtionStats.attackspeed, value);
		      }
	  	      case "PercentMovementSpeedMod": {
		      	//movement speed by percent 7%
		        newChamptionStats.movespeed = applyPercentageItemEffect(champtionStats.movespeed, value);
		      }
		    
		      /*****************all flat case************/
		     
		      case "FlatCritChanceMod": {
	  	      	//critChance 0.3 = 30% flat
		         newChamptionStats.crit = applyFlatItemEffect(champtionStats.crit, value);
		      }

		      case "FlatMagicDamageMod": {
		      	//ablityPower ex: + 60
		        newChamptionStats.abilityPower = applyFlatItemEffect(champtionStats.abilityPower, value);
		      }
		      case "FlatHPPoolMod": {
		      	//flat health ex: + 400 health
		        newChamptionStats.hp = applyFlatItemEffect(champtionStats.hp, value);
		      }
		       case "FlatPhysicalDamageMod": {
		      	//flat damage ex: + 60 damage
		        newChamptionStats.attackdamage = applyFlatItemEffect(champtionStats.attackdamage, value);
		      }
		       case "FlatArmorMod": {
		      	//flat FlatArmorMod ex: + 100 armor
		        newChamptionStats.Armor = applyFlatItemEffect(champtionStats.Armor, value);
		      }
		       case "FlatSpellBlockMod": {
		      	//flat magicResist ex: + 40 majic resist
		       newChamptionStats.magicResist = applyFlatItemEffect(champtionStats.magicResist, value);
		      }
		      //percent stats but treat as flat stats
		       case "PercentLifeStealMod": {
		      	//lift steal like 10% but it's added as flat
		      	newChamptionStats.lifeSteal = applyFlatItemEffect(champtionStats.lifeSteal, value);
		      }
			}

		});
		//Here should dispatch a event to notice that chamption statas is chanced
		//this this.props.dispatch(ItemAddedToCurrentChamption(itemId, newChamptionStats));
	    return newChamptionStats;
	}

	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;

		//const description = singleItemStats.description;

		if (_.isEmpty(singleItemStats)) {
			return(
				<p> Click Any Item To See The Affect </p>
			);
		} else {
			const temp = this.generateStatsObject(this.props.singleItemStats,this.props.singleChamptionstats);
			return (
				<div className="imageborder">
					<ItemImageIcon itemKey={singleItemStats.id} />
					<h4> {singleItemStats.name} </h4>
					<p> {singleItemStats.description} </p>
					<Button bsStyle="success"> Apply Effect </Button>
				</div>
			)
		}
	}
}