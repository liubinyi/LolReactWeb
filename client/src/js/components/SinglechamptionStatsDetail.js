import React from 'react';
import { connect } from "react-redux";

import ImageIcon from './ImageIcon';
import ItemImageIcon from './ItemImageIcon';
import ItemSixGrid from './ItemSixGrid';
import SingleItemStatsDetail from './SingleItemStatsDetail';
import SingleTableRow from './SingleTableRow';


import { fetchChamptionStatsDetails } from "../actions/championStatsAction";



import {NullToZero} from "../Helper/helper";


import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})

export default class SinglechamptionStatsDetail extends React.Component {


	levelUp() {

		let newStatus = this.props.champAbility
		if (newStatus.level < 18) {
			newStatus.level += 1;
			newStatus.attackdamage += this.props.champAbility.attackdamageperlevel;
			newStatus.armor += this.props.champAbility.armorperlevel;
			newStatus.hp += this.props.champAbility.hpperlevel;
			newStatus.crit += this.props.champAbility.critperlevel;
			this.props.dispatch(fetchChamptionStatsDetails(newStatus))
		}
	}


	levelDown() {
		let newStatus = this.props.champAbility
		if (newStatus.level > 1) {
			newStatus.level -= 1;
			newStatus.attackdamage -= this.props.champAbility.attackdamageperlevel;
			newStatus.armor -= this.props.champAbility.armorperlevel;
			newStatus.hp -= this.props.champAbility.hpperlevel;
			newStatus.crit -= this.props.champAbility.critperlevel;
			this.props.dispatch(fetchChamptionStatsDetails(newStatus))
		}
	}


	render() {

		//ablity should have per level amount next to the side
		const {championStats,singleChamptionstats} = this.props;
		const attackspeed = (0.625/(1+this.props.champAbility.attackspeedoffset)).toFixed(6);

		let championStatsObject = {
			"damage" : this.props.champAbility.attackdamage.toFixed(1),
			"health" : this.props.champAbility.hp.toFixed(1),
			"movementSpeed" : this.props.champAbility.movespeed.toFixed(1),
		  	"attackspeed" : attackspeed,
		  	"armor": this.props.champAbility.armor.toFixed(1),
		  	"magicResistance" : NullToZero(this.props.champAbility.magicResist),
		  	"ablity" : NullToZero(this.props.champAbility.abilityPower),
		  	"cooldown": NullToZero(this.props.champAbility.cooldown),
		  	"critDamage" : NullToZero(this.props.champAbility.critDamage),
		  	"critChance" : this.props.champAbility.crit.toFixed(2),
		  	"lifeSteal" : NullToZero(this.props.champAbility.lifeSteal),
		  	"magicPeneration":  NullToZero(this.props.champAbility.magicPeneration),
		  	"armorPeneration":  NullToZero(this.props.champAbility.armorPeneration)
		}

		const champtionStatsGraphs = Object.keys(championStatsObject).map(itemKey =>
			<SingleTableRow key={itemKey} itemKey={itemKey} itemValue={championStatsObject[itemKey]}/>
		);

		return (
			<div className="champtionStatsDetail row" >
				<div className="col-md-1">	
					
				</div>
				<div className="col-md-2 levelButton">
					<div className="level">
						<h6> Lvl {this.props.champAbility.level} </h6>
					 	<Button onClick={this.levelUp.bind(this)} bsStyle="success"> + </Button>
					 	<Button onClick={this.levelDown.bind(this)} bsStyle="info"> - </Button>
				 	</div>
					<ImageIcon championKey={this.props.champAbility.key} loadFullChampImg={true} />
				</div>
				<div className="col-md-3">
					<table className="table table-condensed">
						<thead>
					      <tr>
					        <th>Attributes</th>
					        <th>Value</th>
					      </tr>
					    </thead>
					    <tbody>
					      {champtionStatsGraphs}
					    </tbody>
					</table>
				</div>
				<div className="col-md-3">
					<h6> Pick Your Item To Create Best Build </h6>
					<ItemSixGrid />
				</div>
				<div className="col-md-2 itemDescription">
					<SingleItemStatsDetail />
				</div>
				<div className="col-md-1">	
					
				</div>
			</div>
		);
	}
}