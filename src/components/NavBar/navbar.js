import {React, useState} from "react";
import './navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/hb.png' 
const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className="navbar">
            
                <div className="menu">
                <Link activeClass = 'active' to = 'intro' spy = {true} smooth={true} offset= {-100} duration = {800} className ="item">Home</Link>
                <Link activeClass = 'active' to = 'about' spy = {true} smooth={true} offset= {-200} duration = {800}className ="item">About</Link>
                <Link activeClass = 'active' to = 'skills' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Skills</Link>
                <Link activeClass = 'active' to = 'projects' spy = {true} smooth={true} offset= {-250} duration = {800}className ="item">Portfolio</Link>
                <Link activeClass = 'active' to = 'contactPage' spy = {true} smooth={true} offset= {-100} duration = {800}className ="item">Contact</Link>
            </div>


            <img src={logo} alt="Burger Menu" className='mobMenu ' onClick={() => setShowMenu(!showMenu)}></img>
            <div className="absolute flex flex-col p-2 gap-2 text-beige top-20  bg-sage w-1/3 rounded-xl border-2 border-black mt-1" style={{display: showMenu? 'flex ':'none'}}>
                <Link activeClass = 'active' to = 'intro' spy = {true} smooth={true} offset= {-100} duration = {800} className ="Listitem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass = 'active' to = 'about' spy = {true} smooth={true} offset= {-200} duration = {800}className ="Listitem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass = 'active' to = 'skills' spy = {true} smooth={true} offset= {-100} duration = {800}className ="Listitem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass = 'active' to = 'projects' spy = {true} smooth={true} offset= {-250} duration = {800}className ="Listitem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass = 'active' to = 'contactPage' spy = {true} smooth={true} offset= {-100} duration = {800}className ="Listitem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar