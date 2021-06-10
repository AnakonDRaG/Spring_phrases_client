import React, {useCallback, useEffect, useState} from 'react';
import {HiFilter} from "react-icons/all";
import {Form, ToggleButtonGroup} from "react-bootstrap";
import {ChangeEvent} from "react";


const Filter = (props: filterPhraseModel) => {
    const [authorChecks, setAuthorChecks] = useState(undefined)
    const [categoryChecks, setCategoryChecks] = useState(undefined)

    const handleOnCheck = useCallback((e: ChangeEvent, state, setStateFunc, searchByItem, searchByProp): Function => {
        const target: HTMLInputElement = e.target

        if (state && state !== target)
            state.checked = false

        setStateFunc(target)
        const id: number = target.value;

        if (target.checked) {
            if (Array.isArray(props.searchList))
                props.setRenderList(props.searchList.filter((item: PhraseModel) => item[searchByItem][searchByProp] === Number(id)))
        } else {
            props.setRenderList(props.searchList)
        }
    })

    return (
        <div className={"box box-filter h-100 " + props.className}>
            <h1 className="w-100 fs-2 mb-2 text-uppercase mb-4"><HiFilter/>Filter</h1>
            <div className="box bg-light mb-3">
                <h2 className="fs-6 text-info text-uppercase">Author</h2>

                {Array.isArray(props.authorsArray) &&
                props.authorsArray.map((item: AuthorModel, index) => {
                    return (
                        <div className="form-group">
                            <Form.Check
                                type="checkbox"
                                id={"author_" + index}
                                value={item.author_ID}
                                onChange={(e) =>
                                    handleOnCheck(
                                        e,
                                        authorChecks,
                                        setAuthorChecks,
                                        "author",
                                        "author_ID"
                                    )}
                                label={item.firstName + " " + item.lastName}
                            />
                        </div>
                    )
                })
                }

            </div>
            <div className="box bg-light mb-3">
                <h2 className="fs-6 text-info text-uppercase">Category</h2>

                {Array.isArray(props.categoriesArray) &&
                props.categoriesArray.map((item: CategoryModel, index) => {
                    return (
                        <div className="form-group">
                            <Form.Check
                                type="checkbox"
                                id={"author_" + index}
                                value={item.category_ID}
                                label={item.name}
                                onChange={(e) =>
                                    handleOnCheck(
                                        e,
                                        categoryChecks,
                                        setCategoryChecks,
                                        "category",
                                        "category_ID"
                                    )}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Filter;