import style from './OrderDetails.module.css';
import graphics from '../../img/graphics.svg';

const OrderDetails = () => {
  return (
      <div className={style.details}>
        <span className={style.digital}>
          035648
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
