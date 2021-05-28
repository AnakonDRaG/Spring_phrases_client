import React from 'react';
import {HiUserGroup} from "react-icons/hi";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";
import {useAuthService} from "../../user/auth/AuthService";
import Client from "../../Client";

export const Categories = () => {
    const {useState, useEffect} = React
    const [categories, setCategory] = useState({})
    const URL = "/categories";
    const {getUser} = useAuthService()

    useEffect(() => {
        Client.get(URL).then(res => {
            setCategory(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <div className="py-3">
                <div className="d-flex mx-5">
                    <HiUserGroup className="me-3 fs-1"/>
                    <div className="w-100 "><h1 className="text-uppercase">Categories</h1></div>
                    <CRUD_ButtonCreate link="/categories/add"/>
                </div>

            </div>

        </>
    );
};

