import React from "react";
import './navbar.css'
import {Link} from 'react-scroll'
const Navbar = () =>{
    return(
        <nav className="navbar">
            
                <div className="menu">
                <Link activeClass = 'active' to = 'intro' spy = {true} smooth={true} offset= {-100} duration = {800} className ="item">Home</Link>
                <Link activeClass = 'active' to = 'about' spy = {true} smooth={true} offset= {-200} duration = {800}className ="item">About</Link>
                <Link activeClass = 'active' to = 'skills' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Skills</Link>
                <Link activeClass = 'active' to = 'projects' spy = {true} smooth={true} offset= {-250} duration = {800}className ="item">Portfolio</Link>
                <Link activeClass = 'active' to = 'contactPage' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar