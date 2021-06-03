import React, {useCallback} from 'react';
import FormCrud from "../form/Form.crud";
import {AuthorInputs, PhraseInputs} from "../inputs";
import {store} from "react-notifications-component";

const AddAuthor = () => {
    const url = "/authors"
    const handleAfterSubmit = useCallback((data) => {
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

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <FormCrud
                    handleAfterSubmit={handleAfterSubmit}
                    inputs={AuthorInputs()}
                    link={url}
                    redirectAfterSubmit="/c_author"/>
            </div>
        </div>
    );
};

export default AddAuthor;