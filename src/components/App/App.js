import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Data from '../../utils/data';

function App() {
    return (
        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                <ul className={AppStyles.container + ' ' + AppStyles.content}>
                    <li className={AppStyles.content__block + " mr-10"}>
                        <BurgerIngredients data={Data}/>
                    </li>
                    <li className="{AppStyles.content__block}">
                        <BurgerConstructor data={Data}/>
                    </li>
                </ul>
            </main>
        </>
    );
}

export default App;
