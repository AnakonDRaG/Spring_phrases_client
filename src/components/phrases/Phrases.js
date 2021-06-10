import React, {Component, useEffect, useState, useCallback} from 'react';


import {observer} from "mobx-react";
import {HiAnnotation, HiOutlineSearch, HiUserGroup} from "react-icons/hi";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";
import {Client} from "../../Client";
import {Badge, Spinner} from "react-bootstrap";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {store} from "react-notifications-component";
import PageLoadSpinner from "../PageLoadSpinner";
import {History} from "../../index";
import Filter from "../Filter";
import PhraseSearcher from "../PhraseSearcher";


const Phrases = observer(() => {
    const url = "/phrases";
    const [renderList, setRenderList] = useState(undefined)
    const [phrases: Array<PhraseModel>, setPhrases] = useState(undefined)
    const [authors: Array<AuthorModel>, setAuthors] = useState(undefined)
    const [categories: Array<CategoryModel>, setCategories] = useState(undefined)
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        Client.get("/authors").then(result => {
            setAuthors(result.data)
        })
        Client.get("/categories").then(result => {
            setCategories(result.data)
        })
        Client.get(url).then(result => {
            setPhrases(result.data)
            setRenderList(result.data)
        })

        setLoadStatus(true)
    }, [])

    useEffect(() => {

    }, [renderList])

    const handleAfterDelete = useCallback((data) => {
        data = data.data
        setRenderList(renderList.filter(({phrase_ID}) => phrase_ID !== data.phrase_ID))
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

    return (
        <div className="d-flex py-4 px-5">

            <div className="w-100 pe-5">
                <div className="d-flex mb-5">
                    <PhraseSearcher searchList={phrases}/>
                    <CRUD_ButtonCreate className="btn-outline-primary ms-5" link="/phrases/add"/>
                </div>
                <div className="w-100 me-auto ms-auto">
                    {
                        Array.isArray(renderList) &&
                        renderList.map((phrase: PhraseModel, index) => {
                            return (
                                <figure key={index} className="mb-5 box p-4">
                                    <blockquote className="blockquote">
                                        <p className="d-flex ">
                                            <h1 role="button"
                                                onClick={() => {
                                                    History.push(url + "/" + phrase.phrase_ID)
                                                }}
                                                className="w-100 h3 text-primary fw-bold m-0 p-0">
                                                {phrase.title}
                                            </h1>
                                            <div>
                                                <CrudButtonEdit
                                                    link={url + "/" + phrase.phrase_ID + "/edit"}
                                                />
                                            </div>
                                            <div className="ms-2">
                                                <CrudButtonDelete
                                                    actionAfterDelete={handleAfterDelete}
                                                    action={url + "/" + phrase.phrase_ID}
                                                    id={phrase.phrase_ID}
                                                />
                                            </div>
                                        </p>
                                        <p className="mb-0">{phrase.meaning}</p>

                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <cite title="Author">{phrase.author.firstName} {phrase.author.lastName}</cite>
                                    </figcaption>
                                </figure>

                            )
                        })
                    }
                </div>

            </div>
            <Filter className="w-25"
                    setRenderList={setRenderList}
                    authorsArray={authors}
                    categoriesArray={categories}
                    searchList={phrases}
                 />
        </div>
    );

})

export default Phrases;