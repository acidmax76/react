import React, {useEffect} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {useSelector,useDispatch} from "react-redux";
import {getIngredients} from "../../serivice/actions/app";


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
                {!hasErrorLoadIngredient &&
                    <ul className={AppStyles.container + ' ' + AppStyles.content}>
                        <li className={AppStyles.content__block + " mr-10"}>
                            {
                                !loadingIngredient &&
                                <BurgerIngredients onClickIngredient={dispatch}/>
                            }
                        </li>
                        <li className="{AppStyles.content__block}">
                            {
                                !loadingIngredient &&
                                <BurgerConstructor deleteIngredient={dispatch} addOrder={dispatch}/>
                            }
                        </li>
                    </ul>
                }
            </main>
        </>
    );
}

export default App;