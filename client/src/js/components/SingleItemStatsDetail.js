import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import ItemImageIcon from './ItemImageIcon';

import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class SingleItemStatsDetail extends React.Component {

	applyItemStats(itemId) {
		//use item id to get the item
		//then loop thorugh item's stats and create a new object with affect and pass to champion props
	}

	generateStatsObject(stats) {
		//this function will be a swtich statement
		let effect = {};

		//repace stats with it's key
		switch (Object.keys(stats)) {

		  /*****************all percentage case************/
	      case "PercentPhysicalDamageMod": {
	        effect["Damage"] = stats["PercentPhysicalDamageMod"];
	      }
	      case "PercentAttackSpeedMod": {
	      	//attack speed by percent 40%
	        effect["AttackSpeed"] = stats["PercentAttackSpeedMod"];
	      }
  	      case "PercentMovementSpeedMod": {
	      	//movement speed by percent 7%
	        effect["MoveSpeedByPercent"] = stats["PercentMovementSpeedMod"];
	      }

	      /*****************all flat case************/
	      case "FlatCritDamageMod": {
	        effect["CritDamage"] = stats["FlatCritDamageMod"];
	      }

	      case "FlatCritChanceMod": {
  	      	//critChance 0.3 = 30% flat
	        effect["CritChance"] = stats["FlatCritChanceMod"];
	      }

	      case "FlatMagicDamageMod": {
	      	//ablityPower ex: + 60
	        effect["abilityPower"] = stats["FlatMagicDamageMod"];
	      }
	      case "FlatHPPoolMod": {
	      	//flat health ex: + 400 health
	        effect["Health"] = stats["FlatHPPoolMod"];
	      }
	       case "FlatPhysicalDamageMod": {
	      	//flat damage ex: + 60 damage
	        effect["damage"] = stats["FlatPhysicalDamageMod"];
	      }
	       case "FlatArmorMod": {
	      	//flat FlatArmorMod ex: + 100 armor
	        effect["armor"] = stats["FlatArmorMod"];
	      }
	       case "FlatSpellBlockMod": {
	      	//flat magicResist ex: + 40 majic resist
	       effect["magicResist"] = stats["FlatSpellBlockMod"];

	      }
		}	
	    return effect;
	}

	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;

		//const description = singleItemStats.description;

		if (_.isEmpty(singleItemStats)) {
			return(
				<p> Click Any Item To See The Affect </p>
			);
		} else {
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