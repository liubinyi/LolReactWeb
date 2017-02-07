import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import ItemImageIcon from './ItemImageIcon';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

import { applyPercentageItemEffect,applyFlatItemEffect} from "../Helper/helper";

import { ItemAddedToCurrentChamption } from "../actions/itemStatsAction";


@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class SingleItemStatsDetail extends React.Component {

	//TODO here need to dispatch a stats object instead apply to base stats
	generateStatsObject(itemStats, champtionStats) {
		//this function will be a swtich statement
		let newChamptionStats = {...champtionStats};
		_.forIn(itemStats.stats, function(value, key) {
			switch (key) {
			  	/*****************all percentage case************/
		     	case "PercentAttackSpeedMod": {
		      	//attack speed by percent 40%
			      	newChamptionStats.attackspeed = applyPercentageItemEffect(champtionStats.attackspeed, value);
			      	if (newChamptionStats.attackspeed > 2.5) {
			      		newChamptionStats.attackspeed = 2.5
			      	}
			      	break;
		     	}
		  	    case "PercentMovementSpeedMod": {
			      	//movement speed by percent 7%
			        newChamptionStats.movespeed = applyPercentageItemEffect(champtionStats.movespeed, value);
			    }
    	      	/*****************all flat case************/   
		        case "FlatCritChanceMod": {
	  	      	//critChance 0.3 = 30% flat
			        newChamptionStats.crit = applyFlatItemEffect(champtionStats.crit, value);
			        if (newChamptionStats.crit > 100) {
			         	newChamptionStats.crit = 100
			        }
			        break;
		        }
		        case "FlatMagicDamageMod": {
		      	//ablityPower ex: + 60
		        	newChamptionStats.abilityPower = applyFlatItemEffect(champtionStats.abilityPower, value);
		        	break;
		        }
		        case "FlatHPPoolMod": {
		      	//flat health ex: + 400 health
		        	newChamptionStats.hp = applyFlatItemEffect(champtionStats.hp, value);
		        	break;
		        }
		        case "FlatPhysicalDamageMod": {
		      	//flat damage ex: + 60 damage
		        	newChamptionStats.attackdamage = applyFlatItemEffect(champtionStats.attackdamage, value);
		        	break;
		        }
		        case "FlatArmorMod": {
		      	//flat FlatArmorMod ex: + 100 armor
		        	newChamptionStats.armor = applyFlatItemEffect(champtionStats.armor, value);
		        	break;
		        }
		      	case "FlatSpellBlockMod": {
		      	//flat magicResist ex: + 40 majic resist
		       		newChamptionStats.magicResist = applyFlatItemEffect(champtionStats.magicResist, value);
		       		break;
		        }
		        //percent stats but treat as flat stats
		        case "PercentLifeStealMod": {
		      	//lift steal like 10% but it's added as flat
		      		newChamptionStats.lifeSteal = applyFlatItemEffect(champtionStats.lifeSteal, value);
		      		break;
		        }
			}
		});
	    this.props.dispatch(ItemAddedToCurrentChamption(itemStats.id, newChamptionStats));
	}

	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;

		if (_.isEmpty(singleItemStats)) {
			return(
				<p> Click Any Item To See The Affect </p>
			);
		} else {
			const description = singleItemStats.description.replace(/(<)(\w*)(>)?/g,"").replace(/(\/)(\w*)(>)/g,".");
			return (
				<div className="imageborder">
					<ItemImageIcon itemKey={singleItemStats.id} />
					<h6> {singleItemStats.name} </h6>
					<p> {description} </p>
					<Button bsStyle="success" onClick={this.generateStatsObject.bind(this,singleItemStats,singleChamptionstats)}> Apply Effect </Button>
				</div>
			)
		}
	}
}