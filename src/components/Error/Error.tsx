import styles from './Error.module.css';
import {FC} from "react";

type TErrorProps ={
    message:string
}

export const Error:FC<TErrorProps> = ({message}) =>{
    return (
    <div className={styles.error}>
        {message}
    </div>
    );
}
