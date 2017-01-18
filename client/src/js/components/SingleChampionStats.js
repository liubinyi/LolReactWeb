import React from 'react';
import { connect } from "react-redux";

import { Button } from 'react-bootstrap';
import ImageIcon from './ImageIcon';

import { filterChamptionsByTag } from "../actions/championStatsAction";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats
  };
})

export default class SingleChampionStats extends React.Component {

	categortyChamptionByTag(tag) {

		if (tag == "") {
			this.props.dispatch(filterChamptionsByTag(this.props.championStatsInfo));
		} else {
			let newChamptions = _.pickBy(this.props.championStatsInfo, function(value, key) {
							return (value.tags != null &&value.tags.includes(tag));
						});
			this.props.dispatch(filterChamptionsByTag(newChamptions));
		}
	}


	render() {
		const divStyle = {
	 	 width: '50',
		 height: '50',
		 display: 'inline-block',
		 opacity: 0.5,
		 backgroundColor: 'black',
		 marginRight: '20',
		 marginBottom : '20'
		}

		const graphs = Object.values(this.props.filteredChamptionStatsInfo).map(champ =>
	   			 <div id={champ.key} key={champ.id} style={divStyle} title={champ.name} onClick={this.props.event} onMouseEnter={(event) => this.props.hover(1,event)} onMouseLeave={(event) => this.props.hover(0.5,event)}>
	   			 	<ImageIcon championKey={champ.key} />	
				 </div>
		);

		const mainDivStyle = {
			 	 width: '500',
			 	 backgroundColor:'black',
			 	 float : 'left'
		}
		return (
			<div>
				<div className="filterButtons">
					<Button onClick={this.categortyChamptionByTag.bind(this,"")} bsStyle="success"> All </Button>
					<Button onClick={this.categortyChamptionByTag.bind(this,"Tank")} bsStyle="success"> Tank </Button>
					<Button onClick={this.categortyChamptionByTag.bind(this,"Mage")} bsStyle="success"> Mage </Button>
					<Button onClick={this.categortyChamptionByTag.bind(this,"Support")} bsStyle="success"> Support </Button>
					<Button onClick={this.categortyChamptionByTag.bind(this,"Assassin")} bsStyle="success"> Assassin </Button>
					<Button onClick={this.categortyChamptionByTag.bind(this,"Marksman")} bsStyle="success"> Marksman </Button>
				</div>
				<div style={mainDivStyle}>
					{graphs}
				</div>
			</div>
		);
	}
}