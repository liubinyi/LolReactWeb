import React from 'react';
import { connect } from "react-redux";

import { fetchChampionStats,fetchChamptionStatsDetails,fetchItemStatsDetails} from "../actions/championStatsAction";
import { fetchItemStats } from "../actions/itemStatsAction";

import ImageIcon from './ImageIcon';
import SingleChampionStats from './SingleChampionStats';
import SinglechamptionStatsDetail from './SinglechamptionStatsDetail';
import SingleItemStats from './SingleItemStats';
import SingleItemStatsDetail from './SingleItemStatsDetail';
import Footer from './Footer';

import _ from 'lodash';



@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})


export default class ChampionStats extends React.Component {

	getChampionStats() {
		//event.preventDefault();
		this.props.dispatch(fetchChampionStats());
	}

	getItemStats() {
		this.props.dispatch(fetchItemStats());
	}


	getSingleChampionAbilities(event) {

		event.preventDefault();
		const key = [event.target.className];
		const stats = this.props.championStats.championStatsInfo[key].stats;
		stats.level = 1;
		stats.key = key;
		this.props.dispatch(fetchChamptionStatsDetails(stats))
		//console.log("OKKKKK")
	}

	getSingleItemDetails(event) {
		event.preventDefault();
		const itemId = event.target.getAttribute("id");
		const itemStats = this.props.championStats.itemStatsInfo[itemId];
		this.props.dispatch(fetchItemStatsDetails(itemStats));
	}

	changeOpacity (num,event) {
		//event.preventDefault();
		document.getElementById(event.target.className).style.opacity = num
	}


	render() {
		const {championStats,singleChamptionstats,singleItemStats} = this.props;

		if (championStats.fetched == false) {
			this.getChampionStats();
			this.getItemStats();
			return (
			<div>			
				<h1> fetching champion stats </h1>
			</div>
			);
		}

		const singleStyle = {
	 	 float: 'right'
		}

		if (championStats.singleChamptionstats.hp != null) {
			return (
				<div>
					<SinglechamptionStatsDetail style={singleStyle} 
						champAbility = {championStats.singleChamptionstats} />
					<div className="row sectionStyle">
						<div className="col-md-1">
						</div>
						<div className="col-md-5">
							<SingleChampionStats 
								championStatsInfo={championStats.championStatsInfo}
								filteredChamptionStatsInfo={championStats.filteredChamptionStatsInfo}
								event={this.getSingleChampionAbilities.bind(this)} 
								hover= {this.changeOpacity.bind(this)}
							/>
						</div>
						<div className="col-md-1">
						</div>
						<div className="col-md-4">
							<SingleItemStats
								itemStatsInfo={championStats.itemStatsInfo}
								filteredItemStatsInfo={championStats.filteredItemStatsInfo}
								click={this.getSingleItemDetails.bind(this)}
							/>
						</div>
						<div className="col-md-1">
						</div>
					</div>
					<Footer />
				</div>
			);	
		}

		return (
			<div>
				<div className="row sectionStyle">
					<div className="col-md-1">
					</div>
					<div className="col-md-5">
						<SingleChampionStats 
							championStatsInfo={championStats.championStatsInfo}
							filteredChamptionStatsInfo={championStats.filteredChamptionStatsInfo}
							event={this.getSingleChampionAbilities.bind(this)} 
							hover= {this.changeOpacity.bind(this)}
						/>
					</div>
					<div className="col-md-1">
					</div>
					<div className="col-md-4">
						<SingleItemStats
							itemStatsInfo={championStats.itemStatsInfo}
							filteredItemStatsInfo={championStats.filteredItemStatsInfo}
							click={this.getSingleItemDetails.bind(this)}
						/>
					</div>
					<div className="col-md-1">
					</div>
				</div>
				<Footer />
			</div>
		);		
	}
}