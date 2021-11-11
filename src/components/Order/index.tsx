import styles from './index.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const Order = () =>{
    return (
            <div className={styles.wrap}>
                    <div className={styles.header}>
                            <div className={styles.header_left}>
                                #812739812
                            </div>
                            <div className={styles.header_right}>
                                Дата заказа
                            </div>
                    </div>
                    <div className={styles.name}>
                        ТУТ наименование бургера
                    </div>
                    <div className={styles.status}>
                        утт статус заказа
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.footer_left}>
                            тут иконки товаров
                        </div>
                        <div className={styles.footer_right}>
                            873 <CurrencyIcon type={"primary"}/>
                        </div>
                    </div>
            </div>
    );
}