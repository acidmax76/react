import React, {useEffect} from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {useSelector,useDispatch} from "react-redux";
import {getIngredients} from "../../serivice/actions/app";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
export const LOADING_INGREDIENTS = 'LOADING_INGREDIENTS';
export const SUCCESS_LOAD_INGREDIENTS = 'SUCCESS_LOAD_INGREDIENTS';
export const FAILED_LOAD_INGREDIENTS = 'FAILED_LOAD_INGREDIENTS';

const App = () => {
    const {hasErrorLoadIngredient,loadingIngredient} = useSelector(store=>store.AppReducer.ingredients);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <DndProvider backend={HTML5Backend}>
                {!hasErrorLoadIngredient &&
                    <ul className={styles.container + ' ' + styles.content}>
                        <li className={styles.content__block + " mr-10"}>
                            {
                                !loadingIngredient &&
                                <BurgerIngredients />
                            }
                        </li>
                        <li className="{AppStyles.content__block}">
                            {
                                !loadingIngredient &&
                                <BurgerConstructor />
                            }
                        </li>
                    </ul>
                }
                </DndProvider>
            </main>
        </>
    );
}

export default App;