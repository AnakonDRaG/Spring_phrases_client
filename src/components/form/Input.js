import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value ? props.value : '',
            className: props.className ? props.className : '',
            error: props.error
        }

    }


    render() {
        const {handleError, inputChange, value, ...opts} = this.props
        this.handleError = handleError
        this.inputChange = inputChange
        this.value = value
        return (
            <input {...opts} value={this.value}
                   onChange={this.inputChange} className={this.state.className}/>
        )
    }
}


export default Input