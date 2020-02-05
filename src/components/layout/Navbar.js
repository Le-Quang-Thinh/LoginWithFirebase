import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SingedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

 const Navbar= ()=>{
     return (
        <nav className="nav-wrapper gret darken">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Kyomi
                </Link> 
                <SingedInLinks></SingedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>  
     )
 }
 export default Navbar;