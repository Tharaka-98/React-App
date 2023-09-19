import React, { useState } from 'react';
import {
    FaBars,
    FaPlus
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaPlus/>
        },
        {
            path:"/about",
            name:"Pages",
            icon:<FaPlus/>
        },
        {
            path:"/analytics",
            name:"Portfolio",
            icon:<FaPlus/>
        },
        {
            path:"/comment",
            name:"Elements",
            icon:<FaPlus/>
        },
        {
            path:"/product",
            name:"Features",
            icon:<FaPlus/>
        },
        {
            path:"/productList",
            name:"Blog",
            icon:<FaPlus/>
        },
        {
            path:"/productList",
            name:"Shop",
            icon:<FaPlus/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">LITHO</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;