import React, {Component} from 'react';
import Form from "../form/Form";
import {PhraseInputs} from "../inputs";

class AddPhrase extends Component {
    URL = "/phrases/create"

    render() {
        return (
            <div className="d-flex align-items-center min-vh-100">
                <div className="w-50 me-auto ms-auto">
                    <Form link={URL} inputs={PhraseInputs()} handleAfterSubmit={() => {}}/>
                </div>
            </div>
        );
    }
}

export default AddPhrase;