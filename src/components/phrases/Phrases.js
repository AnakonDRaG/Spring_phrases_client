import React, {Component, useEffect, useState, useCallback} from 'react';


import {observer} from "mobx-react";
import {HiAnnotation, HiUserGroup} from "react-icons/hi";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";
import {Client} from "../../Client";
import {Badge, Spinner} from "react-bootstrap";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {store} from "react-notifications-component";
import PageLoadSpinner from "../PageLoadSpinner";
import {History} from "../../index";


const Phrases = observer(() => {
    const url = "/phrases";
    const [phrases, setPhrases] = useState(undefined)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        Client.get(url).then(result => {
            setPhrases(result.data)
        })

        setLoadStatus(true)
    }, [])

    const handleAfterDelete = useCallback((data) => {
        data = data.data
        setPhrases(phrases.filter(({phrase_ID}) => phrase_ID !== data.phrase_ID))
        store.addNotification({
            title: "SUCCESS!",
            message: "Phrase was create!",
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
    })


    if (!isLoaded)
        return <PageLoadSpinner/>
    else
        return (
            <div className="py-3">
                <div className="text-center mb-2">
                    <CRUD_ButtonCreate link="/phrases/add"/>
                </div>
                <div className="w-100 me-auto ms-auto px-5">
                    {
                        Array.isArray(phrases) &&
                        phrases.map(({phrase_ID, title, meaning, author, category}, index) => {
                            return (
                                <figure key={index} className="mb-5 shadow-sm p-4">
                                    <blockquote className="blockquote">
                                        <p className="d-flex ">
                                            <h1 role="button"
                                                 onClick={() => {
                                                     History.push(url + "/" + phrase_ID)
                                                 }}
                                                 className="w-100 h3 text-primary fw-bold m-0 p-0">
                                                {title}
                                            </h1>
                                            <div>
                                                <CrudButtonEdit
                                                    link={url + "/" + phrase_ID + "/edit"}
                                                />
                                            </div>
                                            <div className="ms-2">
                                                <CrudButtonDelete
                                                    actionAfterDelete={handleAfterDelete}
                                                    action={url + "/" + phrase_ID}
                                                    id={phrase_ID}
                                                />
                                            </div>
                                        </p>
                                        <p className="mb-0">{meaning}</p>

                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <cite title="Author">{author.firstName} {author.lastName}</cite>
                                    </figcaption>
                                </figure>

                            )
                        })
                    }
                </div>
            </div>
        );

})

export default Phrases;