import React, {Component, useState} from 'react';

import {NavLink} from "react-router-dom";
import NavProfile from "../user/profile/NavProfile";
import {HiAnnotation, HiClipboardList, HiLogin, HiUser} from "react-icons/hi";
import AuthService from "../user/auth/auth.service";
import {observer} from "mobx-react";
import ModalComponent from "./modals/Modal.component";
import LoginForm from "./form/LoginForm";
import RegistrationForm from "./form/RegistrationForm";


const Navbar = observer(() => {

    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-light p-0 m-0">
            <div
                className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column box-sizing-border min-vh-100 left-menu-size"
                id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <div className="fw-bold pt-5 pb-4 text-center text-primary w-100">
                        Phrases<span className="fw-bold">App</span>
                    </div>
                    <li className="mb-4">
                        <NavLink to="/" className="nav-link p-0 m-0 text-center" activeClassName="active fw-bold text-primary" exact>
                            <div className="nav-item-icon bg-primary mb-2">
                                <HiAnnotation className="fs-4 text-white"/>
                            </div>
                            <div className="">Phrases</div>
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink to="/c_author" className="nav-link p-0 m-0 text-center" activeClassName="active fw-bold text-primary">
                            <div className="nav-item-icon bg-primary mb-2">
                                <HiUser className="fs-4 text-white"/>
                            </div>
                            <div className="">Authors</div>
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink to="/categories" className="nav-link p-0 m-0 text-center" activeClassName="active fw-bold text-primary">
                            <div className="nav-item-icon bg-primary mb-2">
                                <HiClipboardList className="fs-4 text-white"/>
                            </div>
                            <div className="">Categories</div>
                        </NavLink>
                    </li>
                </ul>
                <div className="bg-primary">
                    {AuthService.isAuth && <NavProfile/>}
                    {!AuthService.isAuth && (
                        <div className="text-center py-4">
                            <div>
                                <ModalComponent
                                    button={<span className="link-primary btn btn-sm px-3 btn-outline-light mb-3 shadow-none">Login<HiLogin
                                        className="ms-2"/></span>}
                                    title="Login"
                                    content={<LoginForm/>}
                                    size="sm"/>
                            </div>
                            <div>
                                <ModalComponent
                                    button={<span className="link-primary btn btn-sm px-4 btn-outline-light shadow-none">Sign up</span>}
                                    title="Registration"
                                    content={<RegistrationForm/>}
                                    size="md"/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )


})


export default Navbar;