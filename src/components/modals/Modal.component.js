import React, {useRef, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {HiX} from "react-icons/all";

const ModalComponent = (props) => {
    const [modalShow, setModalShow] = useState(false)
    let modalRef = useRef(null)
    const {title, button, content, size} = props

    const customButton = <div role="button"
                              className="d-inline-block"
                              onClick={() => {
                                  setModalShow(true)
                              }
                              }>{button}</div>

    return (
        <>
            {customButton}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size={size === undefined ? "lg" : size}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="bg-white"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                    <Button className="btn-close shadow-none bg-white  me-1" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                        setModalShow(false)
                    }}>
                        <span aria-hidden="true"/>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {content}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalComponent;