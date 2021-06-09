import React from 'react';
import {Client} from "../../Client";
import {store} from "react-notifications-component";
import {AuthorInputs, CategoriesInputs} from "../inputs";
import {useParams} from "react-router";
import FormCrud from "../form/Form.crud";
import AuthService from "../../user/auth/auth.service";
import DontHavePermissions from "../errors/DontHavePermissions";
import {observer} from "mobx-react";

const EditCategory = observer(() => {
    const {useState, useEffect} = React
    const {id} = useParams()
    const [category, setCategory] = useState({})
    const URL = "/categories"

    useEffect(async () => {
        await Client.get(URL + "/" + id).then(res => {
            setCategory(res.data)

        })

    }, [])

    function handleAfterSubmit(data) {
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

        setTimeout(() => {

            window.location.replace("/categories");
        }, 1000)
    }


    if (!AuthService.isAuth)
        return <DontHavePermissions/>

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <div className="">
                    {(
                        <FormCrud
                            link={URL + "/" + id}
                            inputs={CategoriesInputs(category)}
                            handleAfterSubmit={handleAfterSubmit.bind(this)}
                            redirectAfterSubmit="/categories"
                            formClassName="bg-white rounded-lg"
                            metrod="PUT"/>
                    )
                    }
                </div>
            </div>
        </div>
    );
})

export default EditCategory;