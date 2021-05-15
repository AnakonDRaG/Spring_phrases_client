import React, {Component} from 'react'
import Input from './Input'
import Client from "../../Client";

class Form extends Component {

    DATA = this.props.data

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault();
        await this.props.handleSubmit();
    }

    handleOnChange(e) {
        const _targer = e.target;
        this.DATA[_targer.name] = _targer.value;
    }

    render() {
        const
            inputs = this.props.inputs.map(
                ({name, placeholder, type, value, className, labelText}, index) => (

                    <div className="form-group">
                        <label htmlFor={name} className="d-block">{labelText}</label>
                        <Input key={index} id={name} name={name} placeholder={placeholder} type={type}
                               value={this.DATA[name]}
                               className={className} inputChange={this.handleOnChange}/>
                    </div>
                )
            )

        return (

            <form onSubmit={
                this
                    .handleSubmit
            }

                  ref=
                      {
                          fm => {
                              this.form = fm
                          }
                      }
            >
                {
                    inputs
                }

            </form>
        )
    }
}


export default Form