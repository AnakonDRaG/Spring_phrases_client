import React from 'react';
import {useAuthService} from "../../user/auth/AuthService";
import Client from "../../Client";
import {Roles} from "../../user/auth/Roles";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";
import {Container} from "react-bootstrap";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {store} from "react-notifications-component";
import CRUD_ButtonEdit from "../CRUD/CRUD_ButtonEdit";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {HiUserGroup} from "react-icons/hi";

export const Authors = () => {
    const {useState, useEffect} = React
    const [authors, setAuthors] = useState({})
    const URL = "/authors";
    const {getUser} = useAuthService()

    useEffect(() => {
        Client.get(URL).then(res => {
            setAuthors(res.data)
            console.log(res.data)
        })
    }, [])

    function afterDelete(data){

        data = data.data
        setAuthors( authors.filter(({author_ID}) => author_ID !== data.author_ID))
        store.addNotification({
            title: "SUCCESS!",
            message: "Author " + data.firstName + " " + data.lastName + " was create!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: true
            }

        });
    }

    return (
        <>
            <div className="py-3">
            <div className="d-flex mx-5">
                <HiUserGroup className="me-3 fs-1"/>
                <div className="w-100 "><h1 className="text-uppercase">Authors</h1></div>
                <CRUD_ButtonCreate link="/c_author/add"/>
            </div>


                {authors.length === 0 && (
                    <div className="d-flex align-items-center min-vh-100">
                        <div className="w-100 me-auto ms-auto text-center">
                            <h1 className="">...</h1>
                        </div>
                    </div>
                )}

                {authors.length > 0 && (
                    <div className="mx-5">
                        {
                            authors.map(({author_ID, firstName, lastName}, index) => {

                                return (
                                    <div className="d-flex shadow rounded-3 my-3 px-4 py-4">
                                        <div className="w-100">{firstName} {lastName}</div>

                                        <div><CrudButtonEdit link={"/c_author/" + author_ID + "/edit"}/></div>
                                        <div className="ms-2"><CrudButtonDelete actionAfterDelete={afterDelete} action={URL + "/" + author_ID} id={author_ID}/></div>
                                    </div>
                                )
                            })
                        }
                    </div>

                )}


            </div>
        </>
    )
}