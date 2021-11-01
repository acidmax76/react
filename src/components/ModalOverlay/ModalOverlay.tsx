import styles from './ModalOverlay.module.css';
import {FC} from "react";

type TModalOverlayProps = {
    onClose: () => void
}

export const ModalOverlay: FC<TModalOverlayProps> = ({onClose}) => {
    return (
        <div className={styles.back} onClick={onClose}>

        </div>
    );
}
