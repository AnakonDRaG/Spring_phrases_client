import React from 'react';
import {Button} from "react-bootstrap";
import {HiArrowNarrowLeft, HiChevronLeft} from "react-icons/all";
import {History} from "../../index";

const DontHavePermissions = () => {
    return (
        <div className="d-flex align-items-center min-vh-100 ">
            <div className="w-75 mx-auto">
                <div className="card text-white bg-danger mb-3 ">
                    <div className="card-body text-center shadow-none">
                        <div className="card-text fw-bold h5">
                            Don`t have permissions!
                        </div>
                    </div>

                </div>
                <Button className="d-block mx-auto mt-5 btn-outline-danger shadow-none rounded-2"
                        onClick={()=> {History.goBack()}}>
                    <HiChevronLeft className="me-1"/> Go back
                </Button>
            </div>
        </div>
    );
};

export default DontHavePermissions;