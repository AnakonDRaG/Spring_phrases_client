import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import AuthService from "../../user/auth/auth.service";
import { RiDoorOpenFill} from "react-icons/all";


const Logout = () => {
    return (
        <Button className="mx-4 btn-outline-light shadow-none" size="sm" onClick={() => AuthService.logout()}>
            <RiDoorOpenFill className="my-2 mx-1 fs-4"/>
        </Button>
    );

}

export default Logout;