import styles from './ModalOverlay.module.css';
import {FC} from "react";
import {IModalOverlayProps} from "../../serivice/interfaces/IModalOverlayProps";

export const ModalOverlay: FC<IModalOverlayProps> = ({onClose}) => {
    return (
        <div className={styles.back} onClick={onClose}>

        </div>
    );
}
