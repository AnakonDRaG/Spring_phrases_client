import React from 'react';
import {NavLink} from 'react-router-dom';
import AuthService from "../user/auth/AuthService";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";



const Header = (props) => {

    return (
        <>
            <Navbar bg="light" variant="light" className="px-5">
                <Navbar.Brand className="fw-bold text-dark">{props.title}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {props.children}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;