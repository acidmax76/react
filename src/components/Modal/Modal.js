import React from 'react';
import ReactDOM from "react-dom";
import style from './Modal.module.css';
const modalRoot = document.getElementById("react-modals");

const Modal = props => {
    return ReactDOM.createPortal(
        (
            <>
                <div className={style.modal}>
                    <div className={style.header}>
                        {props.title}
                    </div>
                </div>
            </>
    ),modalRoot);
}

export default Modal;
