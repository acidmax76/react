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
        needFetch: true,
        hasError:false,
    })



    useEffect(() => {
        const getData = async () => {
            try {
                setState({...state, loading: true});
                const res = await fetch(API_URL);
                if (!res.ok) {
                    throw new Error('Ответ сети был не ok.');
                }
                const data = await res.json();
                setState({...state, Data: data.data, loading: false, hasError: false});
            } catch (e) {
                setState({...state, Data: [], loading: false, hasError: true});
                console.log(e.message);
            }
        };
        getData(state.needFetch);
    }, []);

    return (

        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                {!state.hasError &&
                <ul className={AppStyles.container + ' ' + AppStyles.content}>
                    <li className={AppStyles.content__block + " mr-10"}>
                        {
                            !state.loading &&
                            <BurgerIngredients data={state.Data}/>
                        }
                    </li>
                    <li className="{AppStyles.content__block}">
                        {
                            !state.loading &&
                            <BurgerConstructor data={state.Data}/>
                        }
                    </li>
                </ul>
                }
                {
                    state.hasError &&
                        <div className={AppStyles.error}> Что то пошло не так , обновите страницу! </div>
                }
            </main>
        </>
    );
}

export default App;
