import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react';
import {HiChevronRight, HiLink, HiOutlineSearch} from "react-icons/hi";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Dropdown, DropdownButton} from "react-bootstrap";
import Select from 'react-select';
import {History} from "../index";
import {SyntheticEvent} from "react";
import {useDetectClickOutside} from 'react-detect-click-outside';

const PhraseSearcher = (props: PhraseSearcherProps) => {
    const [result, setResult] = useState([])
    const resultList = useRef()
    const searchInput = useRef()


    const handleOnKeyDown = useCallback((e: ChangeEvent) => {
        if (resultList.current.hidden)
            resultList.current.hidden = false

        const target: HTMLInputElement = e.target

        if (target.value !== "")
            setResult(props.searchList.filter((item: PhraseModel) =>
                    item.title
                        .toLowerCase()
                        .includes(
                            target.value
                                .toLowerCase()
                        )
                )
            )
        else
            setResult(props.searchList)
    })

    const handleOutsideClick = useCallback((e: SyntheticEvent) => {
        resultList.current.hidden = true
    })

    useEffect(() => {

    }, [props.searchList])

    const parentComponent = useDetectClickOutside(
        {onTriggered: handleOutsideClick})

    return (
        <div className="d-flex w-100 box align-items-center" ref={parentComponent}>
            <HiOutlineSearch className="fs-1 me-4"/>
            <div className="phrase-searcher w-100">
                <input ref={searchInput}
                       type="text"
                       className="w-100 form-control"
                       placeholder="Title"
                       onChange={(e) => handleOnKeyDown(e)}
                       onFocus={() => {
                           if (result.length > 0 && resultList.current.hidden)
                               resultList.current.hidden = false
                       }}

                />

                <ul className="phrase-searcher-result list-unstyled box shadow mt-2 position-absolute w-100 "
                    ref={resultList}
                    hidden={true}>
                    <div className="mb-3">
                        Result
                    </div>
                    {Array.isArray(result) &&
                    result.map((item: PhraseModel) => {
                        return <li className="py-2">
                            <div role="button" onClick={() => History.push("/phrases/" + item.phrase_ID)}
                                 className="text-decoration-none link-info">
                                <HiChevronRight/> {item.title}
                            </div>
                        </li>
                    })
                    }
                    {Array.isArray(result) && result.length === 0 &&
                    <span className="text-danger">Not found</span>}
                </ul>
            </div>
        </div>
    );
};

export default PhraseSearcher;