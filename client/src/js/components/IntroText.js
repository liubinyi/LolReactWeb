import React from 'react'
import TypeWriter from 'react-typewriter'



export default class IntroText extends React.Component {
	render() {

		return (
			<TypeWriter typing={1}>
	      			Hello Welcome To YasuoGG
	      			Here is how it Works
	      			 <span style={{color: 'blue'}}>First Enter Your Summonor Name </span>
      		</TypeWriter>
		);
	}
}