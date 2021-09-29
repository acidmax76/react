import style from './OrderDetails.module.css';
import graphics from '../../img/graphics.svg';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getOrder} from "../../serivice/actions/OrderDetails";
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_REQUEST='ORDER_REQUEST';
export const ORDER_ERROR='ORDER_ERROR'

const OrderDetails = () => {
    const {OrderDetailsReducer,BurgerConstructorReducer} = useSelector(store=>store);
    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(getOrder(BurgerConstructorReducer.constructor))
        },
        [dispatch]);

    return (
        <div className={style.details}>
        <span className={style.digital}>
          {OrderDetailsReducer.order.number}
        </span>
            <span className={style.identificator + ' mt-8'}>
          идентификатор заказа
        </span>
            <span className={'mt-15'}>
          <img src={graphics} alt={"checked"}/>
        </span>
            <span className={style.ready + ' mt-15'}>
          Ваш заказ начали готовить
        </span>
            <span className={style.wait + ' mt-2 mb-14'}>
          Дождитесь готовности на орбитальной станции
        </span>
        </div>
    );
}

export default OrderDetails;
