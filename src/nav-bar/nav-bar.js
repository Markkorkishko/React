import React from "react";
import MenuItem from "../menu-item";
import './nav-bar.css'
import Logo from "../logo";

const NavigationBar = ({menuData}) => {

    const menuItemList = menuData.map((element) => {
        return (
            <li className='nav-menu-style'><MenuItem {... element}/></li>
        )
        });

    return (
        <div>
            <ul className='nav-style'>
                <li className='nav-menu-style'><Logo isheader={true}/></li>
                {menuItemList}
            </ul>

        </div>
    )
};

export default NavigationBar;