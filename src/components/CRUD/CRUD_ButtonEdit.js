import React from 'react';
import {useAuthService} from "../../user/auth/AuthService";
import {Roles} from "../../user/auth/Roles";


const CrudButtonEdit = (props) => {
    const {getUser} = useAuthService()
    return (
        <>
            {getUser().role === Roles.admin && (
                <a href={props.link} className={"btn btn-outline-info btn-sm  px-4 " + props.className}>EDIT</a>
            )}
        </>
    );
};

export default CrudButtonEdit;