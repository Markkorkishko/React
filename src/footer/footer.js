import React from "react";
import './footer.css'
import FootMenu from "../foot-menu";
import Logo from "../logo";

const Footer = ({topMenuData, footMenuData, textBar}) => {

    const FooterMenuOne = topMenuData.map((element) => {
        return (
            <li><FootMenu {...element}/></li>
        );
    });

    const FootStylePackOne = (element) => {
        return (
            <a>
                <ul className='footer-list-1'>
                    {element}
                </ul>
            </a>
        );
    };

    const FooterMenuTwo = footMenuData.map((element) => {
        return (
            <li><FootMenu {...element}/></li>
        );
    });

    const FootStylePackTwo = (element) => {
        return (
            <a>
                <ul className='footer-list-2'>
                    {element}
                </ul>
            </a>
        );
    };

    const TextBar = (text) => {
        return (
            <a>
                <ul className='footer-list-3'>
                    <li>{text}</li>
                </ul>
            </a>
        );
    };

    return (
        <div className='my-footer-style'>
            <a><Logo className='logo-footer-style' isheader={false}/></a>

            {FootStylePackOne(FooterMenuOne)}
            {FootStylePackTwo(FooterMenuTwo)}
            {TextBar(textBar)}

        </div>

    );
};

export default Footer;