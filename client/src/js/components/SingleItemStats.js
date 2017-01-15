import React from 'react';
import { connect } from "react-redux";

import ItemImageIcon from './ItemImageIcon';
import { Button } from 'react-bootstrap';

import { filterItemsByTag } from "../actions/championStatsAction";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})

export default class SingleItemStats extends React.Component {

	categortyItemByTag(tag) {

		if (tag == "") {
			this.props.dispatch(filterItemsByTag(this.props.itemStatsInfo));
		} else {
			let newItems = _.pickBy(this.props.itemStatsInfo, function(value, key) {
							return (value.tags != null &&value.tags.includes(tag));
						});
			this.props.dispatch(filterItemsByTag(newItems));
		}
	}

	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block',
		 backgroundColor: 'black',
		  marginRight: '20',
		 marginBottom : '20'
		}

		const itemGraphs = Object.values(this.props.filteredItemStatsInfo).map(item =>
	   			 <div id={item.id} key={item.id} style={divStyle} onClick={this.props.click}>
	   			 	<ItemImageIcon itemKey={item.id} />	
				 </div>
		);

		const mainDivStyle = {
			 	 width: '500',
			 	 backgroundColor:'black',
			 	 float: 'right'

		}
		return (
			<div>
				<div className="filterButtons">
					<Button onClick={this.categortyItemByTag.bind(this,"")} bsStyle="success"> All </Button>
					<Button onClick={this.categortyItemByTag.bind(this,"SpellDamage")} bsStyle="success"> Ablity </Button>
					<Button onClick={this.categortyItemByTag.bind(this,"Damage")} bsStyle="success"> Damage </Button>
					<Button onClick={this.categortyItemByTag.bind(this,"AttackSpeed")} bsStyle="success"> AttackSpeed </Button>
				</div>
				<div style={mainDivStyle}>
					{itemGraphs}
				</div>
			</div>
			
		);
	}
}