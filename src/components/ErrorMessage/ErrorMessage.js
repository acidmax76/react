import styles from './ErrorMessage.module.css';
import PropTypes from "prop-types";
export const ErrorMessage=(props)=>{
    return (
        <div className={styles.error}>
            {props.message}
        </div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};