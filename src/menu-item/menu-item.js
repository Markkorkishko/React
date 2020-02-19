import React from "react";
import './menu-item.css';

const MenuItem = ({name}) => {
    return <a>{name.toUpperCase()}</a>
};

export default MenuItem;