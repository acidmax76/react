import styles from './index.module.css';
import {Order} from "../Order";

export const OrdersList = () => {

    return (
            <div className={styles.main + ' custom-scroll'}>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
            </div>
    )
}