import React, {useState} from 'react';
import './state.css'

function State ({itemName, startAmount, totalCountChangeUp, totalCountChangeDown}) {

    const [itemsAmount, setItemsAmount] = useState(startAmount);

    const countChangeUp = (e) => {
        e.preventDefault();
        setItemsAmount(itemsAmount +1);
        totalCountChangeUp();
    };

    const countChangeDown = (e) => {
        e.preventDefault();
        if (itemsAmount>0)
        {
            setItemsAmount(itemsAmount-1);
            totalCountChangeDown();
        }
    };

    return(
        <form>
            <div id="stateID">
                {itemName}
            </div>
                <button className="stateButtonsID" onClick={countChangeDown}>-</button>
                    {itemsAmount}
                <button className="stateButtonsID" onClick={countChangeUp}>+</button>
        </form>
    )

};

export default State;