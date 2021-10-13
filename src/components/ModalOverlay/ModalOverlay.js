import styles from './ModalOverlay.module.css';

export const ModalOverlay = (props) => {
    return (
            <div className={styles.back} onClick={props.onClose}>

            </div>
    );
}
