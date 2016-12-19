import React from 'react';
import { connect } from "react-redux";

import { fetchChampionStats } from "../actions/championStatsAction";
import ImageIcon from './ImageIcon';

import _ from 'lodash';



@connect((store) => {
  return {
    championStats: store.championStats
  };
})


export default class ChampionStats extends React.Component {

	getChampionStats() {
		//event.preventDefault();
		this.props.dispatch(fetchChampionStats());
	}

	displayChampions(data) {

		const divStyle = {
		 	  width: '50',
			  height: '50',
			  display: 'inline-block'
			}

		var graphs = Object.values(data).map(champ =>
   			 <div key={champ.id} style={divStyle} title={champ.name}>
   			 	<ImageIcon championKey={champ.key} onClick={this.getChampionAbilities.bind(this)}/>	
   			 </div>
		);

		return graphs;
	}

	getChampionAbilities(stats) {
		//fire up an event generate a new componet
		return (
			<h1> Stop Here</h1>
		);
	}


	render() {
		const {championStats} = this.props;

		if (championStats.fetched == false) {
			this.getChampionStats();
			return (
			<div>			
				<h1> fetching champion stats </h1>
			</div>
			);
		}
		
		return (
			<div>
				{this.displayChampions(championStats.championStatsInfo)}
			</div>	
		);		
	}
}