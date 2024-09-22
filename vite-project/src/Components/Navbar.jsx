import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <Link><img src="/logo.jpg" alt="" srcset="" width={100}/></Link>
        </div>
        <ul>
            <li className="page"><Link to='/'>Home</Link> </li>
            <li className="page"><Link to ='Aboutus'>About Us</Link></li>
            <li className="page"><Link to='Portfolio'>Portfolio</Link></li>
            <li className="page"><Link to='Contactus'>Contact us</Link></li>
        </ul>
        
    </div>
  )
}
