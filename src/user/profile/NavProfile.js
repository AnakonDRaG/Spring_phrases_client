import React from 'react';

import Logout from "../auth/logout";
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";

const NavProfile = observer(() => {

    return (
        <div className="text-center py-4  align-items-center justify-content-center w-100">
            <div className="fw-bold fs-6 text-white">
                {AuthService.user.firstName} {AuthService.user.lastName}
            </div>
            <div className="mt-3"><Logout/></div>
        </div>
    );

})

export default NavProfile;