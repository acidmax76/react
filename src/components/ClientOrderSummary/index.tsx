import styles from './index.module.css';
import {FC, useEffect, useMemo} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "../../serivice/types";
import {getOrderSummary} from "../../serivice/OrderSummary/actions";
import {getSummaryOrders} from "../../serivice/OrderSummary/selectors";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import {getItems} from "../../serivice/App/selectors";
import {OrderSummaryDetail} from "../OrderSummaryDetail";

interface IOrderSummaryProps {
    modal: boolean
}

export const OrderSummary: FC<IOrderSummaryProps> = ({modal}) => {
    const dispatch = useDispatch();
    const {id} = useParams<{ id?: string }>();
    const summary = useSelector(getSummaryOrders);
    const ingredients = useSelector(getItems);
    const order = "name" in summary.orders ? summary.orders : false;
    dayjs.extend(calendar);
    dayjs.locale('ru');
    const date = order ? dayjs(order.createdAt) : "";
    const cost: number = order ? order.ingredients.reduce((acc, item) => {
        const price = ingredients.ingredients.items.find(item2 => item2._id === item);
        if (price) {
            return acc + price.price
        } else {
            return acc
        }
    }, 0) : 0;
    const rows = order ?
            ingredients.ingredients.items.filter(item2 => {
                const ingredient = order.ingredients.find(item => item === item2._id);
                return !!ingredient;
            })
            : [];
    // eslint-disable-next-line
    const sum = order ? useMemo(()=>order.ingredients.reduce((acc:{[x:string]:number}, item:string) => (acc[item] = ++ acc[item] || 1, acc),{}),[order.ingredients]) : {};
    useEffect(() => {
                dispatch(getOrderSummary(id));
            }
            , [dispatch, id]);
    return (
            <div className={styles.container}>
                <div className={styles.content}>
                    {order &&
                    <div className={modal ? styles.main_modal : styles.main}>
                        <div className={styles.header}>
                            # {order.number}
                        </div>
                        <div className={styles.name}>
                            {order.name}
                        </div>
                        <div className={styles.status}>
                            {order.status === "done" ? "Готов" : order.status === "pending" ? "Готовится" : "Создан"}
                        </div>
                        <div className={styles.ingredients}>
                            <div className={styles.ingredients_header}>
                                Состав:
                            </div>
                            <div className={styles.ingredients_container + ' custom-scroll'}>
                                {
                                    rows.map(item => {
                                                const qty = sum[item._id];
                                                return (
                                                <OrderSummaryDetail key={item._id} image={item.image_mobile}
                                                                    name={item.name} price={item.price} qty={qty}/>
                                                )
                                            }
                                    )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.footer_left}>
                                {date && date.calendar(null, {
                                    sameDay: '[Сегодня в] H:mm', // В тот же день (сегодня в 2:30 утра)
                                    lastDay: '[Вчера в] H:mm',
                                    sameElse: 'DD/MM/YYYY' // Всё остальное ( 17/10/2011 )
                                })}
                            </div>
                            <div className={styles.footer_right}>
                                <div className={styles.price}>
                                    {cost}
                                </div>
                                <div className={styles.icon}>
                                    <CurrencyIcon type={"primary"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
    );
}