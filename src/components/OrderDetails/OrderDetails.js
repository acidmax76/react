import styles from './OrderDetails.module.css';
import graphics from '../../img/graphics.svg';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrder} from "../../serivice/OrderDetails/actions";
import {getOrders} from "../../serivice/OrderDetails/selectors";
import {getConstructorItems} from "../../serivice/BurgerConstructor/selectors";

export const OrderDetails = () => {
    const {order} = useSelector(getOrders);
    const {bun, items} = useSelector(getConstructorItems);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getOrder({bun, items}))
        },
        [dispatch, bun, items]);

    return (
        order?.number ?
            <div className={styles.details}>
        <span className={styles.digital}>
          {order.number}
        </span>
                <span className={styles.identificator + ' mt-8'}>
          идентификатор заказа
        </span>
                <span className={'mt-15'}>
          <img src={graphics} alt={"checked"}/>
        </span>
                <span className={styles.ready + ' mt-15'}>
          Ваш заказ начали готовить
        </span>
                <span className={styles.wait + ' mt-2 mb-14'}>
          Дождитесь готовности на орбитальной станции
        </span>
            </div>
            :
            <>
                <div className={styles.identificator + " mt-8"}>
                    Идет оформление заказа ....
                </div>
                <div className={styles.ready + " mt-8"}>
                    Минуточку ...
                </div>
            </>
    );
}

