import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <header className="text-center mb-5 mt-4">
            <h1 className="mb-2 mt-2 display-5">Catch phrases</h1>

            <div className="links">
                <NavLink to="/" className="btn link" activeClassName="active" exact>
                    Phrases
                </NavLink>
                <NavLink to="/authors" className="btn link" activeClassName="active">
                    Authors
                </NavLink>
                <NavLink to="/add" className="btn link" activeClassName="active">
                    Categories
                </NavLink>
                <div className="mt-2">
                    <NavLink to="/login" className="btn link btn-sm btn-primary" activeClassName="active">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="btn link btn-sm btn-primary ms-1" activeClassName="active">
                        Sign Up
                    </NavLink>
                </div>

            </div>
        </header>
    );
};

export default Header;