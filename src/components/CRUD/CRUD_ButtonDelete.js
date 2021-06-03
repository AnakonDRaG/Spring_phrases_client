import React from 'react';
import {Roles} from "../../user/auth/Roles";
import {Client} from "../../Client";
import AuthService from "../../user/auth/auth.service";
import {observer} from "mobx-react";
import {Button, Form} from "react-bootstrap";
import {HiTrash} from "react-icons/all";

export const CrudButtonDelete = observer((props) => {

    function handleSubmit(e) {
        e.preventDefault()

        Client.delete(props.action).then(res => {
            props.actionAfterDelete(res)
        })

    }
    if(!AuthService.isAuth)
        return ""

    return (
        <>
            {AuthService.user.role === Roles.admin && (
                <Form onSubmit={handleSubmit}>
                    <Button type="submit" className="btn-danger"><HiTrash/></Button>
                </Form>
            )}
        </>
    );
})
