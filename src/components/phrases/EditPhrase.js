import React, {useEffect, useState} from 'react';
import {Client} from "../../Client";
import {store} from "react-notifications-component";
import FormCrud from "../form/Form.crud";
import {PhraseInputs} from "../inputs";
import {useParams} from "react-router";
import {Spinner} from "react-bootstrap";
import PageLoadSpinner from "../PageLoadSpinner";

const EditPhrase = () => {

    const {id} = useParams()
    const [phrase, setPhrase] = useState({})
    const [authors, setAuthors] = useState({})
    const [categories, setCategories] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)
    const URL = "/phrases"

    useEffect(() => {
        Client.get(URL + "/" + id).then(res => {
            setPhrase(res.data)
        })
        Client.get(URL + "/create").then(result => {
            setAuthors(result.data.authors)
            setCategories(result.data.categories)
            setLoadStatus(true)
        })
    }, [isLoaded])

    if (!isLoaded)
        return <PageLoadSpinner/>

    function handleAfterSubmit(data) {
        store.addNotification({
            title: "SUCCESS!",
            message: "Author was update!",
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
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <div className="">
                    {(
                        <FormCrud
                            handleAfterSubmit={handleAfterSubmit}
                            inputs={
                                PhraseInputs(
                                    {
                                        title: phrase.title,
                                        meaning: phrase.meaning,
                                        selectedAuthor: phrase.author.author_ID,
                                        selectedCategory: phrase.category.categoty_ID
                                    },
                                    {authors, categories}
                                )}
                            link={URL + "/" + id}
                            redirectAfterSubmit="/phrases"
                            metrod="PUT"
                        />
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default EditPhrase;