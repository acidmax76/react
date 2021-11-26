import styles from './index.module.css';
import React, {useEffect} from "react";
import {WS_CONNECTION_CLOSE, WS_CONNECTION_START} from "../../serivice/Websocket/actions";
import {useDispatch,useSelector} from "../../serivice/types";
import {getWsStore} from "../../serivice/Feed/selectors";
import {LocationState} from "history";
import {Link, useLocation} from "react-router-dom";
import {getItems} from "../../serivice/App/selectors";
import {Order} from "../ClientOrder";


export const OrdersList = () => {
    const dispatch = useDispatch();
    const wsStore = useSelector(getWsStore);
    const location: LocationState = useLocation();
    const orders = "orders" in wsStore.data ? wsStore.data.orders : [];

    orders.sort((a,b)=>{
        if (a.number<b.number){
            return 1;
        }
        if (a.number > b.number){
            return -1
        }
        return 0;
    });
    const ingredients = useSelector(getItems);
    useEffect(  () => {

                dispatch({type: WS_CONNECTION_START, payload: true});
                return () => {
                    dispatch({type: WS_CONNECTION_CLOSE});
                }
            }, // eslint-disable-next-line
            [dispatch]);
    return (
            <div className={styles.main + ' custom-scroll'}>
                {
                    wsStore.wsConnected && orders &&
                    orders.map(item => {
                        const cost: number = item.ingredients.reduce((acc, item) => {
                            const price = ingredients.ingredients.items.find(item2 => item2._id === item);
                            if (price) {
                                return acc + price.price
                            } else {
                                return acc
                            }
                        }, 0);

                        const uniqueIngredients: string[] = item.ingredients.filter((item2, index) => {
                            return item.ingredients.indexOf(item2) === index;
                        });

                        const images:string[] = uniqueIngredients.map(item => {
                            const image = ingredients.ingredients.items.find(item2 => item2._id === item);
                            return image ? image.image_mobile : "";
                        });

                        return <Link key={item.number} className={styles.ingredients__card} to={{
                            pathname: "/profile/orders/"+item.number,
                            state: {modal: location, type: "profile"}
                        }}>
                            <Order key={item.number} item={item} cost={cost} images={images}/>
                        </Link>
                    })
                }

            </div>
    )
}