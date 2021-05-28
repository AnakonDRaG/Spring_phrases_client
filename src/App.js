import './resources/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import LoginForm from "./components/form/LoginForm";
import Phrases from "./components/phrases/Phrases";
import Phrase from "./components/phrases/Phrase";
import RegistrationForm from "./components/form/RegistrationForm";
import {useAuthService} from "./user/auth/AuthService";
import Navbar from "./components/Navbar";
import React, {Component, useState} from "react";

import {useEffect} from "react-notifications-component";
import Client from "./Client";
import AddPhrase from "./components/phrases/AddPhrase";
import {Authors} from "./components/authors/Authors";
import CreateAuthor from "./components/authors/CreateAuthor";
import CreateCategory from "./components/categories/CreateCategory";
import {EditAuthor} from "./components/authors/EditAuthor";
import {Categories} from "./components/categories/Categories";
import Cookies from "js-cookie";




function App(props) {
    const {useState, useEffect} = React
    const {init, data, setUser, isAuth} = useAuthService()

    useEffect(async () => {
        if (isAuth()) {
            await Client.post("/auth/user", data).then(res => {
                setUser(res.data)

            })
        }

    }, []);

    return (
        <div className="App">

            <Router>
                <div className="row flex-nowrap g-0">
                    <div className="col-sm-auto sticky-top left-menu-size">
                        <div className="position-fixed">
                            <Navbar/>
                        </div>
                    </div>
                    <div className="col-sm min-vh-100">
                        <div className="">
                            <Switch>
                                <Route exact path={["/", "/phrases"]}>
                                    <Phrases/>
                                </Route>
                                <Route path="/phrases/add">
                                    <AddPhrase/>
                                </Route>

                                <Route path="/phrases/:id" render={(props) => <Phrase {...props}/>}/>

                                <Route exact path="/c_author"><Authors/></Route>
                                <Route path="/c_author/add"><CreateAuthor/></Route>
                                <Route path="/c_author/:id/edit">
                                    <EditAuthor/>
                                </Route>


                                <Route extract path="/categories">
                                    <Categories/>
                                </Route>

                                <Route path="categories/add">
                                    <CreateCategory/>
                                </Route>

                                <Route exact path="/login">
                                    <LoginForm/>
                                </Route>
                                <Route exact path="/signup">
                                    <RegistrationForm/>
                                </Route>

                            </Switch>
                        </div>
                    </div>
                </div>

            </Router>
        </div>
    );

}

export default App;
