import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

const SingedInLinks =() =>{
    return (
        <ul className="right">
            <li>
                <NavLink to ="/">New Projest</NavLink>
            </li>
            <li>
                <NavLink to ="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to ="/" className="btn btn-floating pink lighten-1">NN</NavLink>
            </li>
        </ul>
    )
}

export default SingedInLinks;