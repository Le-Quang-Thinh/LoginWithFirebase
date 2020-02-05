import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

const SingedOutLinks =() =>{
    return (
        <ul className="right">
            <li>
                <NavLink to ="/singin">SingIn</NavLink>
            </li>
            <li>
                <NavLink to ="/">LogIn</NavLink>
            </li>
        </ul>
    )
}

export default SingedOutLinks;