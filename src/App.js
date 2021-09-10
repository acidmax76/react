import React from 'react';
import AppStyles from './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import Data from './utils/data';

function App() {
    return (
        <>
            <AppHeader/>
            <main>
                <div className="wrapper">
                    <BurgerIngredients />
                    <BurgerConstructor />
                </div>
            </main>
        </>
    );
}

export default App;
