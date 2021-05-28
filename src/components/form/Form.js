import React, {Component} from 'react'
import Input from './Input'
import Client from "../../Client";


class Form extends Component {

    DATA = {}
    state = {errors: {}, successData: {}}

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({inputs: this.props.inputs})
    }

    async handleSubmit(e) {
        e.preventDefault();
        new FormData(e.target).forEach((value, key) => {
            this.DATA[key] = value
        });
        var data = new FormData();
        Object.keys(this.DATA).forEach(key => data.append(key, this.DATA[key]));


        switch (this.props.metrod) {
            case "PUT":
                await this.action(Client.put(this.props.link, data))
                break
            default:
                await this.action(Client.post(this.props.link, data))
        }
    }


    async action(http) {
        await http.then(result => {
            this.setState({successData: result.data.resources})
            this.setState({errors: {}})

            console.log(result)

            this.props.handleAfterSubmit(this.state.successData)
        }).catch(result => {
            this.setState({successMessage: ""})
            this.props.inputs.map(item => {
                item.error = null;
            })
            if (result.response === undefined) return
            const errors = result.response.data.errors
            this.setState({errors: errors})
        })
    }

    render() {
        const
            inputs = this.props.inputs.map(
                ({name, placeholder, type, value, className, labelText}, index) => {
                    const errors = this.state.errors;
                    let errorContent = "";

                    return (
                        <div className="form-group mb-4">
                            <label htmlFor={name} className="d-block fw-bold ">{labelText}</label>

                            {
                                {
                                    "submit": <Input key={index} id={name} name={name} placeholder={placeholder}
                                                     type={type}
                                                     className={className} value={value}/>,
                                    "textarea": <textarea key={index} id={name} name={name} className={className}
                                                          rows="6">{value}</textarea>,
                                }[type] ||
                                <Input key={index} id={name} name={name} placeholder={placeholder} type={type}
                                       className={className}/>
                            }

                            {errors[name] !== null && (
                                <div className="text-danger mt-1 small">{errors[name]}</div>
                            )}
                        </div>
                    )
                }
            )

        return (
            <>

                <form onSubmit={this.handleSubmit} ref={fm => {
                    this.form = fm
                }}>
                    {inputs}
                </form>
            </>
        )
    }
}


export default Form