import React from 'react';

const DontHavePermissions = () => {
    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-75 me-auto ms-auto">
                <div className="card text-white bg-danger mb-3" >
                    <div className="card-body text-center">
                        <div className="card-text fw-bold h5">Don`t have permissions!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DontHavePermissions;