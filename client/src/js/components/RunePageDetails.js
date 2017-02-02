import React from 'react';


export default class Footer extends React.Component {

	let name = this.props.runeDetails.name;

	//filter the stats that are not 0

	//should just be a table display non zero stats
	const graphs = Object.values(this.props.runeDetails).map(r =>
   			 <div >
   			 	<h1> okookoko </h1>
			 </div>
	);


	render() {
		return (
  			 <div className="row">
				<h1> OK </h1>
			</div>
		);
	}
}