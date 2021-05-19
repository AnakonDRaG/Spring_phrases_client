import React, {Component} from 'react'
import Input from './Input'
import Client from "../../Client";

class Form extends Component {

    DATA = this.props.data

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault();
        new FormData(e.target).forEach((value, key) => {
            this.DATA[key] = value
        });
        await this.props.handleSubmit();
    }

    render() {
        const
            inputs = this.props.inputs.map(
                ({name, placeholder, type, value, className, labelText}, index) => {
                    let errorContent = "";
                    if (this.props.errors !== undefined)
                        if (this.props.errors[name] !== null)
                            errorContent = <div className="text-danger">{this.props.errors[name]}</div>
                        else
                            errorContent = "";
                    return (
                        <div className="form-group">
                            <label htmlFor={name} className="d-block">{labelText}</label>
                            <Input key={index} id={name} name={name} placeholder={placeholder} type={type}
                                   className={className}/>
                            {errorContent}
                        </div>
                    )
                }
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