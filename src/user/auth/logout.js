import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {useAuthService} from "./AuthService";


const Logout = () => {
    const {logout} = useAuthService()
    return (
        <Button className="btn-outline-dark px-5" size="sm" onClick={() => logout()}>Logout</Button>
    );

}

export default Logout;