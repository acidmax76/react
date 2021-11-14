import BurgerIngredientStyle from "../BurgerIngredients/BurgerIngredients.module.css";
import React, {FC} from "react";
import {Order} from "../ClientOrder";
import styles from "../ClientOrders/index.module.css";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "../../serivice/types";
import {getWsStore} from "../../serivice/Feed/selectors";
import {LocationState} from "history";
import {getItems} from "../../serivice/App/selectors";


export const Orders: FC = () => {
    const location: LocationState = useLocation();
    const wsStore = useSelector(getWsStore);
    const orders = "orders" in wsStore.data ? wsStore.data.orders : [];
    const ingredients = useSelector(getItems);
    return (
            orders.length > 0 ?
                    <section className={BurgerIngredientStyle.ingredients + ' pt-10 pb-10'}>
                        <h2 className="ingredients__title text_type_main-large mb-5"> Лента заказов</h2>
                        <div className={BurgerIngredientStyle.ingredients__content + ' custom-scroll'}>
                            <ul className={BurgerIngredientStyle.ingredients__content_list}>
                                {
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
                                            pathname: "/feed/"+item.number,
                                            state: {modal: location, type: "order"}
                                        }}>
                                            <Order key={item.number} item={item} cost={cost} images={images}/>
                                        </Link>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    :
                    <section className={BurgerIngredientStyle.ingredients + ' pt-10 pb-10'}>
                        <h2 className="ingredients__title text_type_main-large mb-5"> Лента заказов</h2>
                        <div> Нет заказов</div>
                    </section>
    );
}