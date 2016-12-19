import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import SearchBox from "./components/SearchBox"
import ChampionStats from "./components/ChampionStats"

import store from "./store"

const app = document.getElementById('app')
const search = document.getElementById('champstats')


ReactDOM.render(<Provider store={store}>
  <SearchBox />
</Provider>, app);


ReactDOM.render(<Provider store={store}>
  <ChampionStats />
</Provider>, champstats);

