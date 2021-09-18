import styles from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
            <div className={styles.back}>
                {props.children}
            </div>
    );
}

export default ModalOverlay;