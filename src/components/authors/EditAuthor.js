import React from 'react';
import Form from "../form/Form";
import {AuthorInputs} from "../inputs";
import {useParams} from "react-router";
import Client from "../../Client";
import {Spinner} from "react-bootstrap";
import {store} from "react-notifications-component";

export const EditAuthor = (props) => {
    const {useState, useEffect} = React
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const URL = "/authors"

    useEffect(async () => {
        await Client.get(URL + "/" + id).then(res => {
            setAuthor(res.data)

        })

    }, [])
    function handleAfterSubmit(data) {
        store.addNotification({
            title: "SUCCESS!",
            message: "Author " + data.firstName + " " + data.lastName + " was update!",
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

            window.location.replace("/c_author");
        }, 1000)
    }

    return (
        <div className="d-flex align-items-center min-vh-100">
            <div className="w-50 me-auto ms-auto">
                <div className="mb-5">
                  <div>
                      <div className="h6">First name (last)</div>
                      {author.firstName}
                  </div>
                    <div className="">
                        <div className="h6">Last name (last)</div>
                        {author.lastName}
                    </div>

                </div>
                <div className="">
                    {(
                        <Form link={URL+ "/"+ id} inputs={AuthorInputs(author)}
                              handleAfterSubmit={handleAfterSubmit.bind(this)} metrod="PUT"/>
                    )
                    }
                </div>
            </div>
        </div>
    );

};
