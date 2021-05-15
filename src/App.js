import './resources/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";

import LoginForm from "./components/form/LoginForm";
import Phrases from "./components/phrases/Phrases";
import Phrase from "./components/phrases/Phrase";
import RegistrationForm from "./components/form/RegistrationForm";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path={["/","/phrases"]}>
                            <Phrases/>
                        </Route>

                        <Route exact path="/phrases/:id" render={(props)=>  <Phrase {...props}/>}>

                        </Route>

                        <Route path="/authors">

                        </Route>
                        <Route path="/categories">

                        </Route>

                        <Route exact path="/login">
                            <LoginForm/>
                        </Route>
                        <Route path="/signup">
                            <RegistrationForm/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
