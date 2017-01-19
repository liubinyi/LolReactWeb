import React from 'react';
import ItemImageIcon from './ItemImageIcon';
import { connect } from "react-redux";

@connect((store) => {
  return {
    championStats: store.championStats,
    singleChamptionstats: store.championStats.singleChamptionstats,
    singleItemStats: store.championStats.singleItemStats,
    itemArray : store.championStats.equippedItemIds
  };
})

export default class ItemSixGrid extends React.Component {
	render() {
		const {itemArray} = this.props;
		return (
			<div className="row">
				<table className="itemSixGrid">
						<thead>
					    </thead>
					    <tbody>
					      <tr>
					        <td className="itemHolder"> 
					        	<ItemImageIcon itemKey={itemArray[0]} />
					        </td>
					        <td className="itemHolder"> 
					        	<ItemImageIcon itemKey={itemArray[1]} />
					        </td>
					        <td className="itemHolder"> 
					        	<ItemImageIcon itemKey={itemArray[2]} />
					        </td>
					      </tr>
					      <tr>
					        <td className="itemHolder">
					        	<ItemImageIcon itemKey={itemArray[3]} />
					        </td>
					        <td className="itemHolder">
					        	<ItemImageIcon itemKey={itemArray[4]} />
					        </td>
					        <td className="itemHolder">
					        	<ItemImageIcon itemKey={itemArray[5]} />
					        </td>
					      </tr>
					    </tbody>
					</table>

			</div>

		);
	}
}