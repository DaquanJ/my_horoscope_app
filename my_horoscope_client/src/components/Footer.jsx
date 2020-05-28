import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Footer = () => {

    return ( 
        <div className='footer' >
            <hr/>
            <ul id='footer-list' >
               <Link id='footer-links' to='/horoscope' > <li> Horoscope </li> </Link>
               <Link id='footer-links' to='/myhoroscopes' > <li> My Horoscopes </li> </Link> 
               <Link id='footer-links' to='/reviews' > <li> Write a Review! </li> </Link>
               <Link id='footer-links' to='/' > <li id='footer-links' > &copy; Your Star 2020 By Per Scholas </li> </Link>
            </ul>
        </div>
     );
}
 
export default Footer;