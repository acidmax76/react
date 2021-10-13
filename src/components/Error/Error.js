import styles from './Error.module.css';
import PropTypes from "prop-types";

export const Error = ({message}) =>{
    return (
    <div className={styles.error}>
        {message}
    </div>
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
};