
import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData';
import './Nav.css';



function Navbar() {
    const [sidebar, setSidebar]= useState(false);
    const showSidebar=()=> setSidebar(!sidebar);
    return (
        
    <>
      

        <div className='navabar'>
          <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-taggle'>
                    <Link to='#' className='menu-bars'></Link>
                     <AiIcons.AiOutlineClose/>
                    </li>
                    {SidebarData.map((item, index)=>{
                        return <li key={item} className={item.cName}>
                            <Link to={item.path}>
                                
                    <span>{item.title}</span>
                            </Link>
                        </li>
                    }

                    )}

                </ul>
            </nav>
                
       
        </>
       
    )
}

export default Navbar
