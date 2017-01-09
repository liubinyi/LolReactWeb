import React from 'react';
import { connect } from "react-redux";

import ImageIcon from './ImageIcon';
import ItemImageIcon from './ItemImageIcon';
import ItemSixGrid from './ItemSixGrid';
import SingleItemStatsDetail from './SingleItemStatsDetail';


import { fetchChamptionStatsDetails } from "../actions/championStatsAction";

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

		const {championStats,singleChamptionstats} = this.props;
		const attackspeed = (0.625/(1+this.props.champAbility.attackspeedoffset)).toFixed(6);
		const cooldown = 0;
		const abilityPower = 0;

		return (
			<div className="champtionStatsDetail row" >
				<div className="col-md-2">
					<ImageIcon championKey={this.props.champAbility.key} loadFullChampImg={true} />
					
				</div>
				<div className="col-md-1">	
					<h4> Level {this.props.champAbility.level} </h4>
				 	<Button onClick={this.levelUp.bind(this)} bsStyle="success"> + </Button>
				 	<Button onClick={this.levelDown.bind(this)} bsStyle="info"> - </Button>
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
					      <tr>
					        <td>AttackDamage</td>
					        <td>{this.props.champAbility.attackdamage.toFixed(2)}</td>
					      </tr>
					      <tr>
					        <td>Ability Power</td>
					        <td>{abilityPower}</td>
					      </tr>
					      <tr>
					        <td>Critical Chance</td>
					        <td>{this.props.champAbility.crit.toFixed(2)}</td>
					      </tr>
					      <tr>
					        <td>AttackSpeed</td>
					        <td>{attackspeed}</td>
					      </tr>
				          <tr>
					        <td>CoolDown</td>
					        <td>{cooldown}</td>
					      </tr>
					      <tr>
					        <td>Armor</td>
					        <td>{this.props.champAbility.armor.toFixed(2)}</td>
					      </tr>
					      <tr>
					        <td>Movespeed</td>
					        <td>{this.props.champAbility.movespeed}</td>
					      </tr>
					      <tr>
					        <td>Health</td>
					        <td>{this.props.champAbility.hp.toFixed(2)}</td>
					      </tr>
					    </tbody>
					</table>
				</div>
				<div className="col-md-4">
					<h4> Pick Your Item To Create Best Build </h4>
					<ItemSixGrid />
				</div>
				<div className="col-md-2 itemDescription">
					<SingleItemStatsDetail />
				</div>
			</div>
		);
	}
}