import React from 'react';
import {NavLink} from "react-router-dom";


export const PhraseViewLittle = (props) => {
    const phrase = props.phrase;
    const URL = props.url;
    return (
        <div className="mb-5 bg-light p-5">
            <NavLink to={URL+"/" + phrase.phrase_ID} activeClassName="active" exact>
                <h1 className="h2">{phrase.title}</h1>
            </NavLink>
            <div className="">
                {phrase.meaning}
            </div>
        </div>
    );
}