import React from 'react';
import {Roles} from "../../user/auth/Roles";
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";
import {HiPlus} from "react-icons/all";
import {History} from "../../index";
import {Button} from "react-bootstrap";

export const CRUD_ButtonCreate = observer((props) => {
    if (!AuthService.isAuth)
        return ""
    return (
        <>
            {AuthService.user.role === Roles.admin && (
                <Button
                    onClick={()=> History.push(props.link)}
                    className={"btn btn-primary rounded-3  text-uppercase " + props.className}>
                    <HiPlus/>
                </Button>
            )}
        </>
    );
})
