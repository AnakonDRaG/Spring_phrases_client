import React from 'react';
import {Spinner} from "react-bootstrap";

const PageLoadSpinner = () => {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Spinner animation="border "
                     className=""/>
        </div>
    );
};

export default PageLoadSpinner;