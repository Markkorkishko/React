import React from "react";
import ItemTemplate from "../item-template";
import "./item-list.css";

const ItemList = ({itemList, onAmountChanging, onSubmittingAddition}) => {

    const listData = itemList.map((item)=>{
        return(
            <li className='item-list' key={item.id}>
                <ItemTemplate name={item.itemName}
                              startAmount={item.startAmount}
                              onAmountChanging={onAmountChanging}
                              onSubmittingAddition={() => onSubmittingAddition(item.id)}
                />
            </li>
        );
    });

    return(
        <ul>
            {listData}
        </ul>

    );
};

export default ItemList;