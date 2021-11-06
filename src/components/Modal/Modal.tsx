import React, {FC, useEffect} from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IModalProps} from "../../serivice/interfaces/IModalProps";



const modalRoot = document.getElementById("react-modals");

export const Modal: FC<IModalProps> = ({header, onClose, children}) => {
    const handleKeyDown = (e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    useEffect(() => {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            }
        }, // eslint-disable-next-line
        []);
    if (!modalRoot) return null;
    return ReactDOM.createPortal(
        (
            <div className={styles.wrapper}>
                <ModalOverlay onClose={onClose}>
                </ModalOverlay>
                <div className={styles.modal + " pt-10 pl-10 pr-10 pb-30"}>
                    <div className={styles.header}>
                        <span className={styles.title}>{header}</span>
                        <div className={styles.close}>
                            <CloseIcon type={"primary"} onClick={onClose}/>
                        </div>
                    </div>

                    <div className={styles.ingredient}>
                        {children}
                    </div>
                </div>

            </div>
        ), modalRoot);
}

;