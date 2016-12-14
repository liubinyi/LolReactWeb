# LolReactWeb
============================
http://localhost:8080
lsof -i tcp:3000 
A single page web application that display league in game status.

*front end built by react - redux
*back end built by Golang

#npm pacakages
*npm init -y
*npm i -S react react-dom
*npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
*react-hot-loader webpack webpack-dev-server
*npm i -g webpack webpack-dev-server
*touch webpack.config.js
*touch index.html


##kill npm dev server
*ps -ax | grep node
*kill -9 <pid>
*lsof -i tcp:3000 

##local Server
*http://localhost:8080
