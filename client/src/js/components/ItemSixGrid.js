import React from 'react';
import ItemImageIcon from './ItemImageIcon';


export default class ItemSixGrid extends React.Component {
	render() {
		const itemArray= [];
		return (
			<div className="row">
				<table className="">
						<thead>
					    </thead>
					    <tbody>
					      <tr>
					        <td className="itemHolder"> 
					        	{itemArray[0]}
					        </td>
					        <td className="itemHolder"> 
					        	{itemArray[1]}
					        </td>
					        <td className="itemHolder"> 
					        	{itemArray[2]}
					        </td>
					      </tr>
					      <tr>
					        <td className="itemHolder">
					        	{itemArray[3]}
					        </td>
					        <td className="itemHolder">
					        	{itemArray[4]}
					        </td>
					        <td className="itemHolder">
					        	{itemArray[5]}
					        </td>
					      </tr>
					    </tbody>
					</table>

			</div>

		);
	}
}