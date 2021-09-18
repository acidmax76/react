import React from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

const Modal = props => {

    const {header, onClose} = props;

    return ReactDOM.createPortal(
        (
            <ModalOverlay>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <span className={styles.title}>{header}</span>
                        <div className={styles.close}>
                            <CloseIcon type={"primary"} onClick={onClose}/>
                        </div>
                    </div>

                    <div className={styles.ingredient}>
                        {props.children}
                    </div>
                </div>
            </ModalOverlay>
        ), modalRoot);
}

export default Modal;
