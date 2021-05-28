import React, {Component, useState} from 'react';

import {NavLink} from "react-router-dom";
import NavProfile from "../user/profile/NavProfile";
import {useAuthService} from "../user/auth/AuthService";
import {HiAnnotation, HiClipboardList, HiUser} from "react-icons/hi";


const Navbar = () => {
    const {isAuth} = useAuthService()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div
                className="side-navbar py-3 px-3 active-nav d-flex justify-content-between flex-wrap flex-column box-sizing-border min-vh-100 left-menu-size"
                id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <h1 className="nav-link h3 text-white">
                        Catch phrases
                    </h1>

                    <li className="nav-link ">
                        <NavLink to="/" className="nav-link" activeClassName="active fw-bold text-secondary active" exact>
                           <HiAnnotation className="me-3 fs-4"/>Phrases
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/c_author" className="nav-link" activeClassName="active fw-bold text-secondary">
                            <HiUser className="me-3 fs-4"/>Authors
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/categories" className="nav-link" activeClassName="active fw-bold text-secondary">
                            <HiClipboardList className="me-3 fs-4"/>Categories
                        </NavLink>
                    </li>
                </ul>
                <div className="">
                    {isAuth() && <NavProfile/>}
                    {!isAuth() && (
                        <div className="text-center mb-4">
                            <NavLink to="/login" className="nav-link d-inline-block" activeClassName="active fw-bold">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="nav-link d-inline-block" activeClassName="active fw-bold">
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )


}


export default Navbar;