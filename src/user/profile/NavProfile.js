import React from 'react';

import Logout from "../auth/logout";
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";

const NavProfile = observer(() => {

    return (
        <div className="d-flex mb-4 text-center align-items-center justify-content-center w-100">
            <div className="fw-bold">
                {AuthService.user.firstName} {AuthService.user.lastName}
            </div>
            <Logout/>
        </div>
    );

})

export default NavProfile;