import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import ItemImageIcon from './ItemImageIcon';

import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import { applyPercentageItemEffect,applyFlatItemEffect} from "../helper/helper";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class SingleItemStatsDetail extends React.Component {



	// applyItemStats(itemId) {
	// 	//use item id to get the item
	// 	//then loop thorugh item's stats and create a new object with affect and pass to champion props
	// }

	// applyPercentageItemEffect(oldStats,num) {
	// 	let newStats = oldStats * (1 + num);
	// 	return newStats;
	// }

	// applyFlatItemEffect(oldStats, num) {
	// 	if (oldStats == null) {
	// 		return num;
	// 	} else {
	// 		return oldStats + num;
	// 	}
	// }

	// applyPercentButAsFlet(oldStats,num) {
	// 	if (oldStats == null) {
	// 		return num;
	// 	} else {
	// 		return oldStats + num;
	// 	}
	// }


	generateStatsObject(itemStats, champtionStats) {
		//this function will be a swtich statement
		let newChamptionStats = champtionStats;
		let a = 
		_.forIn(itemStats.stats, function(value, key) {
			switch (key) {

			  /*****************all percentage case************/
		      case "PercentAttackSpeedMod": {
		      	//attack speed by percent 40%
		      	champtionStats.attackspeed = applyPercentageItemEffect(champtionStats.attackspeed, value);
		      }
	  	      case "PercentMovementSpeedMod": {
		      	//movement speed by percent 7%
		        champtionStats.movespeed = applyPercentageItemEffect(champtionStats.movespeed, value);
		      }
		    
		      /*****************all flat case************/
		     
		      case "FlatCritChanceMod": {
	  	      	//critChance 0.3 = 30% flat
		         champtionStats.crit = applyFlatItemEffect(champtionStats.crit, value);
		      }

		      case "FlatMagicDamageMod": {
		      	//ablityPower ex: + 60
		        champtionStats.abilityPower = applyFlatItemEffect(champtionStats.abilityPower, value);
		      }
		      case "FlatHPPoolMod": {
		      	//flat health ex: + 400 health
		        champtionStats.hp = applyFlatItemEffect(champtionStats.hp, value);
		      }
		       case "FlatPhysicalDamageMod": {
		      	//flat damage ex: + 60 damage
		        champtionStats.attackdamage = applyFlatItemEffect(champtionStats.attackdamage, value);
		      }
		       case "FlatArmorMod": {
		      	//flat FlatArmorMod ex: + 100 armor
		        champtionStats.Armor = applyFlatItemEffect(champtionStats.Armor, value);
		      }
		       case "FlatSpellBlockMod": {
		      	//flat magicResist ex: + 40 majic resist
		       champtionStats.magicResist = applyFlatItemEffect(champtionStats.magicResist, value);
		      }
		      //percent stats but treat as flat stats
		       case "PercentLifeStealMod": {
		      	//lift steal like 10% but it's added as flat
		      	champion.lifeSteal = applyPercentButAsFlet(champion.lifeSteal, value);
		      }
			}

		});	
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