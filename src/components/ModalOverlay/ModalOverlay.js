import styles from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
            <div className={styles.back} onClick={props.onClose}>

            </div>
    );
}

export default ModalOverlay;