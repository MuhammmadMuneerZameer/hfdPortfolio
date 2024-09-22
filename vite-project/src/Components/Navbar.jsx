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
            <li className="page"><Link>Home</Link> </li>
            <li className="page"><Link>About Us</Link></li>
            <li className="page"><Link>Portfolio</Link></li>
            <li className="page"><Link>Contact us</Link></li>
        </ul>
        
    </div>
  )
}
