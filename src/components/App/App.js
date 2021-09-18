import React, {useState, useEffect} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

function App() {
    const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
    const [state, setState] = useState({
        Data: [],
        loading: true,
    })

    const getData = async () => {
        try {
            setState({...state, loading: true});
            const res = await fetch(API_URL);
            const data = await res.json();
            setState({...state, Data: data.data, loading: false});
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (

        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                <ul className={AppStyles.container + ' ' + AppStyles.content}>
                    <li className={AppStyles.content__block + " mr-10"}>
                        {
                            <BurgerIngredients data={state.Data}/>
                        }
                    </li>
                    <li className="{AppStyles.content__block}">
                        {
                            <BurgerConstructor data={state.Data}/>
                        }
                    </li>
                </ul>
            </main>
        </>
    );
}

export default App;
