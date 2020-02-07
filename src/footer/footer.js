import React from "react";
import './footer.css'
import FootMenu from "../foot-menu";
import Logo from "../logo";

const Footer = () =>{
    return(
        <div className='my-footer-style'>
            <a><Logo className='logo-footer-style' isheader={false} /></a>

            <a><ul className='footer-list-1'>
                <li><FootMenu name='Contact Us'/></li>
                <li><FootMenu name='About Us'/></li>
                <li><FootMenu name='Partners'/></li>
                <li><FootMenu name='Careers'/></li>
            </ul></a>
            <a><ul className='footer-list-2'>
                <li><FootMenu name='Media'/></li>
                <li><FootMenu name='Promotions'/></li>
                <li><FootMenu name='FAQs'/></li>
                <li><FootMenu name='Join Now'/></li>
            </ul></a>

        </div>

    );
};

export default Footer;