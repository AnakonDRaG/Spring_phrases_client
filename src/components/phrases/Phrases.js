import React, {Component} from 'react';
import {PhraseViewLittle} from "./PhraseViewLitte";
import Client from "../../Client";

class Phrases extends Component {
    URL = "/phrases";
    state = {phrases:[]}

    async getData(){
        await Client.get(this.URL)
            .then(res => this.setState({phrases:res.data._embedded.phrases}));
        console.log(this.state);
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="w-75 me-auto ms-auto">
                {
                    this.state.phrases.map(phrase => {
                        return <PhraseViewLittle phrase={phrase} url={this.URL}/>
                    })
                }

            </div>
        );
    }
}

export default Phrases;