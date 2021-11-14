import stylesBurger from "../BurgerConstructor/BurgerConstructor.module.css";
import styles from './index.module.css';
import React from "react";
import {useSelector} from "../../serivice/types";
import {getCreatedOrders, getDoneOrders, getWsStore} from "../../serivice/Feed/selectors";

export const OrdersSummary = () => {
    const wsStore = useSelector(getWsStore);
    const doneOrders = useSelector(getDoneOrders);
    const createdOrders = useSelector(getCreatedOrders);

    const total: number | string = "total" in wsStore.data ? wsStore.data.total : "";
    const totalToday: number | string = "totalToday" in wsStore.data ? wsStore.data.totalToday : "";
    return (
            <section className={stylesBurger.constructor + " pt-25 pb-10"}>
                <div className={styles.stats}>
                    <div className={styles.status}>
                        <div className={styles.status_ready}>
                            <div className={styles.ready_header}>
                                Готовы:
                            </div>
                            <div className={styles.ready_content}>
                                <div className={styles.ready_col1}>
                                    {
                                        [...doneOrders].splice(0,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })

                                    }
                                </div>
                                <div className={styles.ready_col2}>
                                    {
                                        [...doneOrders].splice(10,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                                <div className={styles.ready_col3}>
                                    {
                                        [...doneOrders].splice(20,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                                <div className={styles.ready_col4}>
                                    {
                                        [...doneOrders].splice(30,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                                <div className={styles.ready_col5}>
                                    {
                                        [...doneOrders].splice(40,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.status_work}>
                            <div className={styles.work_header}>
                                В работе:
                            </div>
                            <div className={styles.work_content}>
                                <div className={styles.work_col1}>
                                    {
                                        [...createdOrders].splice(0,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                                <div className={styles.work_col2}>
                                    {
                                        [...createdOrders].splice(10,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }
                                </div>
                                <div className={styles.work_col3}>
                                    {
                                        [...createdOrders].splice(20,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }

                                </div>
                                <div className={styles.work_col4}>
                                    {
                                        [...createdOrders].splice(30,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }

                                </div>
                                <div className={styles.work_col5}>
                                    {
                                        [...createdOrders].splice(40,10).map((item)=>{
                                            return (<div key={item.number}>{item.number}</div>)
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.all_time}>
                        <div className={styles.all_time_header}>
                            Выполенно за все время:
                        </div>
                        <div className={styles.all_time_content}>
                            {total}
                        </div>
                    </div>
                    <div className={styles.today}>
                        <div className={styles.today_header}>
                            Выполнено за сегодня:
                        </div>
                        <div className={styles.today_content}>
                            {totalToday}
                        </div>
                    </div>
                </div>
            </section>

    );
}