import React from 'react';
import {Roles} from "../../user/auth/Roles";
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";
import {HiPencil} from "react-icons/all";


const CrudButtonEdit = observer((props) => {

    if (!AuthService.isAuth)
        return ""

    return (
        <>
            {AuthService.user.role === Roles.admin && (
                <a href={props.link} className="btn btn-outline-info"><HiPencil/></a>
            )}
        </>
    );
})

export default CrudButtonEdit;