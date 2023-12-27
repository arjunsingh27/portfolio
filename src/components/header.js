import React from "react";
import "./header.css";
import Avatar from '@mui/material/Avatar';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
 


function Header(){
    return (

        <div className="header">
        <div className="header_logo">
        <Link to="/home">
        <Avatar alt="Arjun Singh" src="./header_logo.jpg" />
        </Link>
        </div>
        <div className="header_nav">
        <Link to="/home" style={{ textDecoration: 'none'}}>
        <div className ="header_nav_name text-link">Home</div>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none'}}>
        <div className ="header_nav_name">About</div>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none'}}>
        <div className ="header_nav_name">Projects</div>
        </Link>
        <Link to="/contactus" style={{ textDecoration: 'none'}}>
        <div className ="header_nav_name">Contact Us</div>
        </Link>
        </div>
        <div className="background_svg">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 952 799" fill="none">
<path d="M1337 156C1337 511.119 1037.7 799 668.5 799C299.298 799 0 511.119 0 156C0 -199.119 299.298 -487 668.5 -487C1037.7 -487 1337 -199.119 1337 156Z" fill="url(#paint0_radial_1_13)"/>
<defs>
<radialGradient id="paint0_radial_1_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-356.5 -7.00003) rotate(19.3694) scale(2026.18 2106.54)">
<stop stopColor="#52D3D8"/>
<stop offset="1" stopColor="#BBAACC" stopOpacity="0"/>
</radialGradient>
</defs>
</svg>
</div>
        </div>

       
    )
    
}
export default Header;
