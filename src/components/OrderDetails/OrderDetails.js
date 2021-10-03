import styles from './OrderDetails.module.css';
import graphics from '../../img/graphics.svg';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrder} from "../../serivice/actions/OrderDetails";

const OrderDetails = () => {
    const {OrderDetailsReducer,BurgerConstructorReducer} = useSelector(store=>store);
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(getOrder(BurgerConstructorReducer.constructor))
        },
        [dispatch,BurgerConstructorReducer.constructor]);

    return (
        <div className={styles.details}>
        <span className={styles.digital}>
          {OrderDetailsReducer.order.number}
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
    );
}

export default OrderDetails;
