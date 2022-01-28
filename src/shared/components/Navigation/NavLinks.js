import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact={true}>All Users</NavLink>
            <NavLink to="/u1/places">My Places</NavLink>
            <NavLink to="/places/new">Add Place</NavLink>
            <NavLink to="/auth">Auth</NavLink>
        </li>
    </ul>
};

export default NavLinks;
