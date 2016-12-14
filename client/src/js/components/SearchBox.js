import React from "react"
import { connect } from "react-redux"
import { fetchSummoner } from "../actions/summonerInfoAction"

@connect((store) => {
  return {
    summonerInfo: store.summonerInfo.summonerInfo
  };
})

export default class SearchBox extends React.Component {

	getSummonerInfo(event) {
		event.preventDefault();
		const summonerName = this.refs.createInput.value;
		this.props.dispatch(fetchSummoner(summonerName))
	}

	render()
	{
		const {summonerInfo} = this.props;

		if (summonerInfo.id == 0) {
	      return (
	      	<div>
				<form>
					<input type="text" placeholder="summoner name" ref="createInput" />
					<button onClick={this.getSummonerInfo.bind(this)}>Search</button>
				</form>
				<h1>  </h1>
			</div>
			);
	    }

		return (
		<div>
       	 	<h1> {summonerInfo.name} </h1>
       	 	<h2> Level {summonerInfo.summonerLevel} </h2>
      	</div>
		);
	}

}