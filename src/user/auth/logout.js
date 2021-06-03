import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import AuthService from "../../user/auth/auth.service";
import {HiLogout, HiOutlineEmojiSad} from "react-icons/all";


const Logout = () => {
    return (
        <Button className="mx-4" size="sm" onClick={() => AuthService.logout()}>
            <HiLogout className="mx-2"/>
        </Button>
    );

}

export default Logout;