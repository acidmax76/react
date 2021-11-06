import styles from './Error.module.css';
import {FC} from "react";
import {IErrorProps} from "../../serivice/interfaces/IErrorProps";

export const Error:FC<IErrorProps> = ({message}) =>{
    return (
    <div className={styles.error}>
        {message}
    </div>
    );
}
