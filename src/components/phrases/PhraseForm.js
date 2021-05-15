import React, { useState } from 'react';

export const PhraseForm = (props) => {
    const {name, text} = {};

    console.log(props.phrase)
    const handleInputChange = (event) => {
        const { inputName, inputValue } = event.target;

    }

    console.log(props.phrase)
    return(
        <div className="w-50 ms-auto me-auto">
            <div className="mb-5">
                <h1 className="">Phrase </h1>
                <div className="">[ lorem to inputqwewerwer ]</div>
            </div>


            <form className="">
                <div className="">
                    <label htmlFor="inputName" className="d-block text-uppercase">Name</label>
                    <input id="inputName" className="form-control" type="text" name="name" onChange={handleInputChange}/>
                </div>
                <div className="mt-4">
                    <label htmlFor="inputName" className="d-block text-uppercase">Text</label>
                    <textarea className="w-100 form-control" name="text" onChange={handleInputChange}/>
                </div>
            </form>
        </div>
    );
}
