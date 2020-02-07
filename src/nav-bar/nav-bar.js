import React from "react";
import MenuItem from "../menu-item";
import './nav-bar.css'
import Logo from "../logo";

const NavigationBar = () => {
    return (
        <div>
            <ul className='nav-style'>
                <li className='nav-menu-style'><Logo isheader={true}/></li>
                <li className='nav-menu-style'><MenuItem name='HOME'/></li>
                <li className='nav-menu-style'><MenuItem name='STORE'/></li>
                <li className='nav-menu-style'><MenuItem name='BLOG'/></li>
                <li className='nav-menu-style'><MenuItem name='SUPPORT'/></li>
            </ul>

        </div>
    )
};

export default NavigationBar;