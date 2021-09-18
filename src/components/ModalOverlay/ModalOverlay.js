import styles from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
            <div className={styles.back} onClick={props.onClose} onKeyDown={props.onKeyDown}>
                {props.children}
            </div>
    );
}

export default ModalOverlay;