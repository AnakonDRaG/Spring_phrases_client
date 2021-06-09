import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Client} from "../../Client";
import {History} from "../../index";


const FormCrud = (props) => {
    const [errors, setErrors] = useState({})
    const [successData, setSuccess] = useState({})
    let form = null
    const {redirectAfterSubmit, inputs, handleAfterSubmit, link, formClassName} = props
    let formData = {}


    async function action(http) {
        return await http.then(result => {
            setSuccess(result.data.resources)
            setErrors({})

            handleAfterSubmit(result.data.resources)
            History.push(redirectAfterSubmit)
        }).catch(result => {
            inputs.map(item => {
                item.error = null;
            })

            if (result.response === undefined) return
            setErrors(result.response.data.errors)
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()

        new FormData(e.target).forEach((value, key) => {
            formData[key] = value
        });
        const data = new FormData()
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        switch (props.metrod) {
            case "PUT":
                await action(Client.put(link, data))
                break
            default:
                await action(Client.post(link, data))
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
            ref={fm => {
                form = fm
            }}
            className={formClassName}
        >
            {
                inputs.map((item, index) => {


                    return (
                        <Form.Group controlId={item.name}>
                            <Form.Label className="mt-4">
                                {item.labelText}
                                {errors && (
                                    <span className="text-danger small px-3 fw-bold">{errors[item.name]}</span>
                                )}
                            </Form.Label>

                            {
                                {
                                    "submit": <Button type="submit" key={index} id={item.name}
                                                      placeholder={item.placeholder}
                                                      className={"btn-outline-primary d-block ms-auto " + item.className}>{item.value && item.value}</Button>,
                                    "textarea": <Form.Control key={index} id={item.name} name={item.name}
                                                              className={item.className}
                                                              as="textarea"
                                                              rows="6" defaultValue={item.value}/>,
                                    "select": <Form.Control key={index} id={item.name} name={item.name}
                                                            className={item.className + " form-select"}
                                                            as="select"
                                                            rows="6">
                                        {
                                            Array.isArray(item.value) && (
                                                item.value.map(({id, text}) => {
                                                    return <option selected={Number(id) === item.selectedValue}
                                                                   value={id}>{text}</option>
                                                })

                                            )
                                        }
                                    </Form.Control>
                                }[item.type] ||
                                <Form.Control key={index} id={item.name} type={item.type} name={item.name}
                                              className={item.className}
                                              defaultValue={item.value && item.value}/>
                            }


                        </Form.Group>
                    )

                })
            }
        </Form>
    );
}

export default FormCrud;