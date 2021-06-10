import React from "react";
import {Router, Switch, Route} from "react-router";
import Navbar from "./Navbar";
import Phrases from "./phrases/Phrases";
import AddPhrase from "./phrases/AddPhrase";
import Phrase from "./phrases/Phrase";
import {Authors} from "./authors/Authors";
import {EditAuthor} from "./authors/EditAuthor";
import {Categories} from "./categories/Categories";
import LoginForm from "./form/LoginForm";
import RegistrationForm from "./form/RegistrationForm";
import {History} from "../index";
import {AuthorInputs, CategoriesInputs, PhraseInputs} from "./inputs";
import EditCategory from "./categories/EditCategory";
import FormCrud from "./form/Form.crud";
import AddAuthor from "./authors/AddAuthor";
import EditPhrase from "./phrases/EditPhrase";
import Author from "./authors/Author";
import AddCategory from "./categories/AddCategory";


export const Routes = () => {
    return (
        <Router history={History}>
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
                            <Route path="/phrases/:id/edit">
                                <EditPhrase/>
                            </Route>

                            <Route path="/phrases/:id" render={(props) => <Phrase {...props}/>}/>

                            <Route exact path="/authors" component={Authors}/>
                            <Route path="/authors/add">
                                <AddAuthor/>
                            </Route>

                            <Route path="/authors/:id/edit">
                                <EditAuthor/>
                            </Route>
                            <Route path="/authors/:id">
                                <Author/>
                            </Route>

                            <Route exact path="/categories">
                                <Categories/>
                            </Route>

                            <Route path="/categories/add">
                                <AddCategory/>
                            </Route>
                            <Route path="/categories/:id/edit">
                                <EditCategory/>
                            </Route>

                        </Switch>
                    </div>
                </div>
            </div>

        </Router>
    );
};