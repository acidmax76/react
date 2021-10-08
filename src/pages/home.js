import styles from "../components/App/App.module.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../serivice/App/selectors";
import {getIngredients} from "../serivice/App/actions";

export const HomePage = () => {
    const ingredients = useSelector(getItems);
    const {hasErrorLoadIngredient,loadingIngredient} = ingredients;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                {!hasErrorLoadIngredient &&
                <ul className={styles.container + ' ' + styles.content}>
                    <li className={styles.content__block + " mr-10"}>
                        {
                            !loadingIngredient &&
                            <BurgerIngredients/>
                        }
                    </li>
                    <li className="{AppStyles.content__block}">
                        {
                            !loadingIngredient &&
                            <BurgerConstructor/>
                        }
                    </li>
                </ul>
                }
            </DndProvider>
        </main>
    )
}