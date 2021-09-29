import React, {useEffect} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {useSelector,useDispatch} from "react-redux";
import {getIngredients} from "../../serivice/actions/app";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const App = () => {
    const {hasErrorLoadIngredient,loadingIngredient} = useSelector(store=>store.AppReducer.ingredients);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
        //console.log(items);
    }, [dispatch]);

    return (
        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                <DndProvider backend={HTML5Backend}>
                {!hasErrorLoadIngredient &&
                    <ul className={AppStyles.container + ' ' + AppStyles.content}>
                        <li className={AppStyles.content__block + " mr-10"}>
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