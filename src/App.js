import React from 'react';
// import AppStyles from './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import Data from './utils/data';

function App() {
    return (
        <>
            <AppHeader/>
            <main className="main">
                <ul className="container content">
                    <li className="content__block mr-10">
                        <BurgerIngredients data={Data}/>
                    </li>
                    <li className="content__block">
                        <BurgerConstructor data={Data}/>
                    </li>
                </ul>
            </main>
        </>
    );
}

export default App;
