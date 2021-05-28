import React from 'react';
import {useAuthService} from "../../user/auth/AuthService";
import {Roles} from "../../user/auth/Roles";
import DontHavePermissions from "../errors/DontHavePermissions";
import {store} from "react-notifications-component";
import Form from "../form/Form";
import {CategoriesInputs} from "../inputs";

const CreateCategory = () => {
    URL = "/categories"
    const {init, getUser} = useAuthService()

    if (getUser().role !== Roles.admin)
        return (<DontHavePermissions/>)

    function handleAfterSubmit(data) {
        store.addNotification({
            title: "SUCCESS!",
            message: "Category " + data.name + " was create!",
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

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <Form link={URL} inputs={CategoriesInputs} handleAfterSubmit={handleAfterSubmit}/>
            </div>
        </div>
    );
};

export default CreateCategory;