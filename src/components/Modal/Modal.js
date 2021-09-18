import React from 'react';
import ReactDOM from "react-dom";
import style from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
const modalRoot = document.getElementById("react-modals");

const Modal = props => {

    const {children,header,onClose} = props;


    return ReactDOM.createPortal(
        (
            <ModalOverlay>
                <div className={style.modal}>
                    <div className={style.header}>
                        {header}
                    </div>
                    <div>
                        <CloseIcon type={"primary"} onClick={onClose} />
                    </div>
                    <div>
                         {children}
                    </div>
                </div>
            </ModalOverlay>
    ),modalRoot);
}

export default Modal;
