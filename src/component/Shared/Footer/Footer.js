import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const opening_hours = [
        {name: "Sat - Tues :     6.00 AM - 10.00 PM" },
        {name: "Wed - Thurs :8.00 AM - 6.00 PM"},
        {name: "Friday :6.00 AM - 10.00 PM" },
        {name: "Sunday :Closed"},
        // {name: "Turkey" , link: "/Turkey"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const information = [
        {name: "Miles" , link: "/miles"},
        {name: "Online Query" , link: "/personal-treatment"},
        {name: "Become Partner" , link: "/tooth-extract"},
        {name: "Terms And Condition" , link: "/checkup"},
    ]
    const about_us = [
        {name: "PC Computer Repair" },
        {name: "Macbook Computer Repair"},
        {name: "Laptop Screen Replacements"},
        {name: "Hardware Repair, Installations"},
        {name: "Troubleshooting"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Opening Hours"} menuItems={opening_hours}/>
                    <FooterCol key={2} menuTitle="About us" menuItems={about_us}/>
                    <FooterCol key={3} menuTitle="Information" menuItems={information}/>
                    <FooterCol key={4} menuTitle="Address & Contact" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-primary brand-btn">+890 234 5678</button>
                        </div>
                    </FooterCol>
                </div>
                <hr/>
                <div className="copyRight text-center">
                    <p className="text-secondary pb-3">Copyright {(new Date()).getFullYear()} All Rights Reserved, Monwar Hossain</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;