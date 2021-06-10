import React, {useState} from 'react';
import {Client} from "../../Client";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {store} from "react-notifications-component";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {HiChevronRight, HiCursorClick, HiUser, HiUserGroup} from "react-icons/hi";
import {observer} from "mobx-react";
import {History} from "../../index";
import PageLoadSpinner from "../PageLoadSpinner";

export const Authors = observer(({history}) => {
    const {useState, useEffect} = React
    const [authors, setAuthors] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)
    const URL = "/authors";

    useEffect(() => {
        Client.get(URL).then(res => {
            setAuthors(res.data)
            setLoadStatus(true)
        })
    }, [])

    function afterDelete(data) {
        data = data.data
        setAuthors(authors.filter(({author_ID}) => author_ID !== data.author_ID))
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

    if (!isLoaded)
        return <PageLoadSpinner/>

    return (
        <>
            <div className="text-center py-3">
                <CRUD_ButtonCreate link="/authors/add"/>
            </div>
            <div className="py-3">
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
                                    <>
                                        <div className="d-flex box mb-4 p-4 align-items-center">
                                            <div role="button"
                                                 onClick={() => {
                                                     History.push("/authors/" + author_ID)
                                                 }}
                                                 className="w-100 h4 mb-0 pb-0 fw-bold">
                                                <span className="">
                                                {firstName} {lastName}
                                            </span>
                                            </div>
                                            <div><CrudButtonEdit link={"/authors/" + author_ID + "/edit"}/></div>
                                            <div className="ms-2"><CrudButtonDelete actionAfterDelete={afterDelete}
                                                                                    action={URL + "/" + author_ID}
                                                                                    id={author_ID}/></div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                )}


            </div>
        </>
    )
})