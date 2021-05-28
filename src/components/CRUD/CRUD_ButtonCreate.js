import React from 'react';
import {useAuthService} from "../../user/auth/AuthService";
import {Roles} from "../../user/auth/Roles";

export const CRUD_ButtonCreate = (props) => {
    const {getUser} = useAuthService()
    return (
        <>
            {getUser().role === Roles.admin && (
                <a href={props.link} className={"btn rounded-3  text-uppercase " + props.className}>CREATE</a>
            )}
        </>
    );
};
