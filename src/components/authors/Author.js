import React, {useEffect, useState} from 'react';
import {Client} from "../../Client";
import PageLoadSpinner from "../PageLoadSpinner";
import {useParams} from "react-router";

const Author = () => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [isLoaded, setLoadStatus] = useState(false)

    const url = "/authors/" + id

    useEffect(async () => {
       await Client.get(url).then(result => {
            setAuthor(result.data)
            setLoadStatus(true)
        })
    }, [])

    if (!isLoaded)
        return <PageLoadSpinner/>
    else
        return (
            <>

                <div className="d-flex align-items-center justify-content-center min-vh-100" >
                    <h1 className="">{author.firstName} {author.lastName} </h1>

                    <h2 className="text-muted px-5">ID: {author.author_ID}</h2>
                </div>
            </>
        );
};

export default Author;