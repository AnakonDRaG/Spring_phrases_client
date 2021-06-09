import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Client} from "../../Client";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {Button, Spinner} from "react-bootstrap";
import PageLoadSpinner from "../PageLoadSpinner";

const Phrase = () => {
    const {id} = useParams()
    const [phrase, setPhrase] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)

    const url = "/phrases/" + id

    useEffect(() => {
        Client.get(url).then(result => {
            setPhrase(result.data)
            setLoadStatus(true)
        })
    }, [])



    if (!isLoaded)
        return <PageLoadSpinner/>
    else
    return (
        <>

        <div className="d-flex align-items-center justify-content-center min-vh-100" >

        <figure key={phrase.index} className="my-3 p-5 w-75 box">
            <blockquote className="blockquote">
                <p className="d-flex ">
                    <span className="w-100 h1 text-primary fw-bold">{phrase.title}</span>
                    <div>
                    </div>
                </p>
                <p className="mb-0">{phrase.meaning}</p>

            </blockquote>
            <figcaption className="blockquote-footer">
                <cite title="Author">{phrase.author.firstName} {phrase.author.lastName}</cite>
            </figcaption>
            <span className="text-muted">Category: {phrase.category.name}</span>

        </figure>
        </div>
        </>
    );
};

export default Phrase;