import React from 'react';
import { connect } from "react-redux";

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo,
    summonerRunePage: store.summonerInfo.summonerRunePage,
    runePageLoaded : store.summonerInfo.runePageLoaded
  };
})

export default class RunePage extends React.Component {


	render() {

		const {summonerInfo, summonerRunePage, runePageLoaded } = this.props;

		if (!runePageLoaded) {
			return (
				<div className="filterButtons">
					<button onClick={this.props.buttonClick}>Load Your Rune Page </button>
				</div>
			);
		}
		
		return (
			<h1> display all rune page here </h1>
		);
	}
}