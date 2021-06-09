import React from 'react';
import {AuthorInputs, PhraseInputs} from "../inputs";
import {useParams} from "react-router";
import {Client} from "../../Client";
import {store} from "react-notifications-component";
import FormCrud from "../form/Form.crud";
import AuthService from "../../user/auth/auth.service";
import DontHavePermissions from "../errors/DontHavePermissions";
import {observer} from "mobx-react";

export const EditAuthor = observer((props) => {
    const {useState, useEffect} = React
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const URL = "/authors"

    useEffect(async () => {
        await Client.get(URL + "/" + id).then(res => {
            setAuthor(res.data)

        })

    }, [])

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

    if (!AuthService.isAuth)
        return <DontHavePermissions/>

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <div className="">
                    {(
                        <FormCrud
                            handleAfterSubmit={handleAfterSubmit}
                            inputs={AuthorInputs({firstName: author.firstName, lastName: author.lastName})}
                            link={URL + "/" + id}
                            redirectAfterSubmit="/c_author"
                            formClassName="box"
                            metrod="PUT"
                        />
                    )
                    }
                </div>
            </div>
        </div>
    );

})
