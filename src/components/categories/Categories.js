import React, {useState} from 'react';
import {HiClipboardList, HiUser, HiUserGroup} from "react-icons/hi";
import {CRUD_ButtonCreate} from "../CRUD/CRUD_ButtonCreate";

import {Client} from "../../Client";
import CrudButtonEdit from "../CRUD/CRUD_ButtonEdit";
import {CrudButtonDelete} from "../CRUD/CRUD_ButtonDelete";
import {store} from "react-notifications-component";
import PageLoadSpinner from "../PageLoadSpinner";

export const Categories = () => {
    const {useState, useEffect} = React
    const [categories, setCategory] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)
    const URL = "/categories";

    useEffect(() => {
        Client.get(URL).then(res => {
            setCategory(res.data)
            setLoadStatus(true)
        })
    }, [])

    function afterDelete(data){

        data = data.data
        setCategory( categories.filter(({сategory_ID}) => сategory_ID !== data.сategory_ID))
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
    }

    if (!isLoaded)
        return <PageLoadSpinner/>

    return (
        <>

            <div className="py-3">
                <div className="text-center mb-2">
                    <CRUD_ButtonCreate link="/categories/add"/>
                </div>

                {categories.length === 0 && (
                    <div className="d-flex align-items-center ">
                        <div className="w-100 font-monospace me-auto ms-auto text-center">
                            <h1 className="h6 p-5">No categories</h1>
                        </div>
                    </div>
                )}
                {categories.length > 0 && (
                    <div className="mx-5">
                        {
                            categories.map(({category_ID, name}, index) => {

                                return (
                                    <div className="d-flex box mb-4 p-4 align-items-center">
                                        <div className="w-100 h3 fw-bold mb-0 pb-0">
                                            {name}
                                        </div>

                                        <div><CrudButtonEdit link={"/categories/" + category_ID + "/edit"}/></div>
                                        <div className="ms-2"><CrudButtonDelete actionAfterDelete={afterDelete} action={URL + "/" + category_ID} id={category_ID}/></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>

        </>
    );
};

