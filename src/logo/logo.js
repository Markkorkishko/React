import React from "react";
import LogoUntappd from './logo-untappd.png';
import "./logo.css";

const Logo = ({isheader=true}) => {
    const isHeader = {
        logoType: isheader ? 'my-logo-header' : 'my-logo-small'
    };

    return <img className= {isHeader.logoType} src={LogoUntappd} alt='Logo'/>;
};

export default Logo;
