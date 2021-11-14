import styles from './feed.module.css';
import React, {useEffect} from "react";
import {Orders} from "../../components/Orders";
import {OrdersSummary} from "../../components/OrdersSummary";
import {useDispatch} from "../../serivice/types";
import {WS_CONNECTION_CLOSE, WS_CONNECTION_START} from "../../serivice/Websocket/actions";
import {useSelector} from "react-redux";
import {getWsStore} from "../../serivice/Feed/selectors";

export const Feed = () => {
    const dispatch = useDispatch();
    const wsStore = useSelector(getWsStore);
    useEffect(() => {
                dispatch({type: WS_CONNECTION_START,payload:false});
                return () => {
                    dispatch({type: WS_CONNECTION_CLOSE});
                }
            }, // eslint-disable-next-line
            [dispatch]);
    return (

            <div className={styles.main}>
                {wsStore.wsConnected && "orders" in wsStore.data &&
                <ul className={styles.container + ' ' + styles.content}>
                    <li className={styles.content__block + " mr-10"}>
                        <Orders />
                    </li>
                    <li className="{AppStyles.content__block}">
                        <OrdersSummary/>
                    </li>
                </ul>
                }
                {
                    wsStore.error  && <div> Нет связи с сервером </div>
                }
            </div>
    );
}