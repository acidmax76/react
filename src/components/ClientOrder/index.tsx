import styles from './index.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from "react";
import {IClientOrder} from "../../serivice/interfaces/IClientOrder";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import calendar from 'dayjs/plugin/calendar';

interface IClientOrderProps {
    item: IClientOrder,
    cost:number,
    images:string[],
}

export const Order: FC<IClientOrderProps> = ({item,cost,images},) => {

    dayjs.extend(calendar);
    dayjs.locale('ru');
    const date = dayjs(item.createdAt);
    return (
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.header_left}>
                        #{item.number}
                    </div>
                    <div className={styles.header_right}>
                        {date.calendar(null, {
                            sameDay: '[Сегодня в] H:mm', // В тот же день (сегодня в 2:30 утра)
                            lastDay: '[Вчера в] H:mm',
                            sameElse: 'DD/MM/YYYY' // Всё остальное ( 17/10/2011 )
                        })}
                    </div>
                </div>
                <div className={styles.name}>
                    {item.name}
                </div>
                <div className={styles.status}>
                    {item.status === "done" ? "Готов" : item.status === "pending" ? "Готовится" : "Создан"}
                </div>
                <div className={styles.footer}>
                    <div className={styles.footer_left}>
                        { images &&
                            images.map((item,index)=> {
                            return (<img key={index} className={styles.img} src={item} alt={"ingredient"}/>);
                        })
                        }
                    </div>
                    <div className={styles.footer_right}>
                        {cost} <CurrencyIcon type={"primary"}/>
                    </div>
                </div>
            </div>
    );
}