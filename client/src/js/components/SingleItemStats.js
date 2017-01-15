import React from 'react';
import ItemImageIcon from './ItemImageIcon';
import { Button } from 'react-bootstrap';


export default class SingleItemStats extends React.Component {


	categortyItemByTag(allitems) {
		//given all the items as input and re-orangize them by 
		//ablitypower, attackspeed, damage, health, movemoent speed, cooldown reduction, armor perneration, majic perneration
		//armor
	}

	filterByAblity() {
		//dispatch an event to filter itemStatsInfo
	}

	filterByDamage() {
		//dispatch an event to filter itemStatsInfo
	}

	filterByAttackSpeed() {
		//dispatch an event to filter itemStatsInfo
	}

	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block',
		 backgroundColor: 'black',
		 marginRight: '10'
		}

		const itemGraphs = Object.values(this.props.itemStatsInfo).map(item =>
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
					<Button onClick={this.filterByAttackSpeed.bind(this)} bsStyle="success"> All </Button>
					<Button onClick={this.filterByAblity.bind(this)} bsStyle="success"> Ablity </Button>
					<Button onClick={this.filterByDamage.bind(this)} bsStyle="success"> Damage </Button>
					<Button onClick={this.filterByAttackSpeed.bind(this)} bsStyle="success"> AttackSpeed </Button>
				</div>
				<div style={mainDivStyle}>
					{itemGraphs}
				</div>
			</div>
			
		);
	}
}