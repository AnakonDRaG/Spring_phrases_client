import React, {Component} from 'react';
import Client from "../../Client";

class Phrase extends Component {

    constructor(props) {
        super(props);
        this.state = {phrase: {}}
    }

    async getData() {
        await Client.get(this.props.match.url)
            .then(res => this.setState({phrase: res.data}))
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="bg-light p-5">
                <blockquote className="blockquote text-center">
                    <h1 className="mb-4">{this.state.phrase.title}</h1>
                    <p className="mb-5">{this.state.phrase.meaning}</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                        Title</cite></footer>
                </blockquote>

            </div>
        );
    }
}

export default Phrase;