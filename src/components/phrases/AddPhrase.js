import React, {useEffect, useState,useCallback} from 'react';
import FormCrud from "../form/Form.crud";
import {PhraseInputs} from "../inputs";
import {Client} from "../../Client";
import {Spinner} from "react-bootstrap";
import {store} from "react-notifications-component";
import PageLoadSpinner from "../PageLoadSpinner";
import {observer} from "mobx-react";
import AuthService from "../../user/auth/auth.service";
import DontHavePermissions from "../errors/DontHavePermissions";


const AddPhrase = observer((callback, deps) => {
    const url = "/phrases/create"
    const [authors, setAuthors] = useState({})
    const [categories, setCategories] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)
    useEffect(async ()=>{
        await Client.get(url).then(result => {
            setAuthors(result.data.authors)
            setCategories(result.data.categories)
            setLoadStatus(true)
        })
    },[isLoaded])


    const handleAfterSubmit = useCallback((data)=> {
        store.addNotification({
            title: "SUCCESS!",
            message: " ",
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

    if (!AuthService.isAuth)
        return <DontHavePermissions/>

    if(!isLoaded)
        return <PageLoadSpinner/>

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <FormCrud
                    handleAfterSubmit={handleAfterSubmit}
                    inputs={PhraseInputs({}, {authors, categories})}
                    link={url}
                    formClassName="box"
                    redirectAfterSubmit="/phrases"/>
            </div>
        </div>
    );
})

export default AddPhrase;