import React from 'react';
import {useAuthService} from "../../user/auth/AuthService";
import {Roles} from "../../user/auth/Roles";
import Client from "../../Client";

export const CrudButtonDelete = (props) => {
    const {getUser, getAccessToken} = useAuthService()
    const DATA = new FormData();
    const id = props.id;

    function handleSubmit(e) {
        e.preventDefault()

        Client.delete(props.action).then(res => {
            console.log(res)
            props.actionAfterDelete(res)
        })

    }

    return (
        <>
            {getUser().role === Roles.admin && (
                <form onSubmit={handleSubmit}>
                    <input type="submit" className="btn btn-outline-danger btn-sm px-4" value="DELETE"/>
                </form>
            )}
        </>
    );
};
