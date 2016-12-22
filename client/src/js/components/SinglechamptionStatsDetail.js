import React from 'react';
import ImageIcon from './ImageIcon';
import { connect } from "react-redux";

import { fetchChamptionStatsDetails } from "../actions/championStatsAction";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.singleChamptionstats
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

		return (
			<div>
			 	<h2> current Level {this.props.champAbility.level} </h2>

			 	<button onClick={this.levelUp.bind(this)}> Click to Increase the level </button>
			 	<button  onClick={this.levelDown.bind(this)}> Click to decrease the level </button>


				<p> attackdamage : {this.props.champAbility.attackdamage} </p>
				<p> armor : {this.props.champAbility.armor} </p>
				<p> movespeed : {this.props.champAbility.movespeed}</p>
				<p> hp: {this.props.champAbility.hp}   </p>
				<p> crit : {this.props.champAbility.crit} </p>
			</div>
		);
	}
}