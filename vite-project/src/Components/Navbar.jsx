import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div className='nav'>
        <div>
            <Link><img src="/logo.png" alt="" srcset="" width={80}/></Link>
        </div>
        <ul>
            <li className="page"><Link to='/' className='page'>Home</Link> </li>
            <li className="page"><Link to ='Aboutus' className='page'>About Us</Link></li>
            <li className="page"><Link to='Portfolio' className='page'>Portfolio</Link></li>
            <li className="page"><Link to='Contactus' className='page'>Contact us</Link></li>
            <li className="page"><Link to='SignUp' className='page'> Sign Up</Link></li>
            <li className="page"><Link to='LogIn' className='page'>Log In</Link></li>
        </ul>
        
    </div>
  )
}
