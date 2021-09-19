import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = props => {
    const {header, onClose} = props;
    const handleKeyDown = (e) => {
        if (e.key === 'Escape'){
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown',handleKeyDown);
    }
    },[]);

    return ReactDOM.createPortal(
        (
            <ModalOverlay onClose={onClose} >
                <div className={styles.modal + " pt-10 pl-10 pr-10 pb-30"}>
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

Modal.propTypes = {
    header: PropTypes.string
};