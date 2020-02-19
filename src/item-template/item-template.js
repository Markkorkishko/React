import React from "react";
import "./item-template.css";

const ItemTemplate = ({name, onAddingItem, onAmountChanging, onSubmittingAddition}) => {
    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            onSubmittingAddition()}}>
            <div>
                {name}
            </div>
            <input onChange={(e) => onAmountChanging(e.target.value)}/>
            <button>Add</button>
        </form>

    );
};

export default ItemTemplate;