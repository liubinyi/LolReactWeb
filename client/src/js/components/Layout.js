import React from "react"
import { connect } from "react-redux"

import { fetchSummoner } from "../actions/summonerInfoAction"

@connect((store) => {
  return {
    // user: store.user.user,
    // userFetched: store.user.fetched,
    // tweets: store.tweets.tweets,
    summonerInfo: store.summonerInfo.summonerInfo,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    //this.props.dispatch(fetchTweets())
    this.props.dispatch(fetchSummoner())
  }

  render() {
    const {summonerInfo} = this.props;

    if (summonerInfo.id == 0) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    return (
      <div>
        <h1> {summonerInfo.name} </h1>
      </div>
    );
  }
}
