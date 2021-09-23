import style from './OrderDetails.module.css';
import graphics from '../../img/graphics.svg';
import PropTypes from "prop-types";

const OrderDetails = (props) => {
    return (
        <div className={style.details}>
        <span className={style.digital}>
          {props.order.number}
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

OrderDetails.propTypes = {
    order: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        date: PropTypes.string,
    })
};

export default OrderDetails;
