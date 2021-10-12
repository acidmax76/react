import styles from './Error.module.css';

export const Error = ({message}) =>{
    return (
    <div className={styles.error}>
        {message}
    </div>
    );
}