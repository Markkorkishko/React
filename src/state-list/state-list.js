import React, {useState} from 'react';
import State from "../state";
import "./state-list.css"

function StateList ({startArray, totalCountChangeUp, totalCountChangeDown, totalCount}) {


    const stateItemList = startArray.map((item) => {
        return(
            <li>
                <State startAmount={item.startAmount}
                       itemName={item.itemName}
                       totalCountChangeUp={totalCountChangeUp}
                       totalCountChangeDown={totalCountChangeDown}/>
            </li>
        )
        });

    const ifTotal = (stateItemList) => {
        const statementTotal =
            <block id='appBlockID'>
                Total: {totalCount}
            </block>;

        if(stateItemList.length > 0){
            return statementTotal
        }
    };

    const ifCart = (stateItemList) => {
        const statementTotal =
            <div id='appCartID'>
                My Cart
            </div>;

        if(stateItemList.length > 0){
            return statementTotal
        }
    };


    return(
        <div>
            {ifCart(stateItemList)}
            <ol id='olStyleID'>
                {stateItemList}
            </ol>
            {ifTotal(stateItemList)}
        </div>
    )

};

export default StateList;