import React from 'react';

import Logout from "../auth/logout";
import {useAuthService} from "../auth/AuthService";

const NavProfile = () => {
    const {getUser} = useAuthService()

    return (
            <div className="mb-4 text-center">
               <div className="fw-bold mb-4">
                   {getUser().firstName} {getUser().lastName}
               </div>
                <Logout/>
            </div>
        );

}

export default NavProfile;