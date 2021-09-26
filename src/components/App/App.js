import React, {useEffect, useReducer, useState} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {InitialState} from "../../serivice/initialState";
import {BurgerContext} from "../../serivice/BurgerContext";
import {reducer} from "../../serivice/reducers/app";
import {SUCCESS_LOAD_INGREDIENTS,FAILED_LOAD_INGREDIENTS,LOADING_INGREDIENTS} from "../../serivice/actions/app";
import Modal from "../Modal/Modal";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";

function App() {
    const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
    const [state, dispatch] = useReducer(reducer,InitialState);
    const [textErrorForModal, setTextErrorForModal] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch({type:LOADING_INGREDIENTS});
                const res = await fetch(API_URL);
                if (!res.ok) {
                    throw new Error('Ответ сети был не ok.');
                }
                const data = await res.json();
                dispatch({type:SUCCESS_LOAD_INGREDIENTS,payload:data.data});
                setShowModal(false);
                setTextErrorForModal('');
            } catch (e) {
                dispatch({type:FAILED_LOAD_INGREDIENTS});
                setTextErrorForModal('Невозможно получить данные ! Ошибка в сети (' + e.message+')');
                setShowModal(true);
            }
        };
        getData();
    }, [state.needFetchIngredients]);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (

        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                {!state.hasErrorLoadIngredient &&
                <BurgerContext.Provider value={state}>
                    <ul className={AppStyles.container + ' ' + AppStyles.content}>
                        <li className={AppStyles.content__block + " mr-10"}>
                            {
                                !state.loadingIngredient &&
                                <BurgerIngredients onClickIngredient={dispatch}/>
                            }
                        </li>
                        <li className="{AppStyles.content__block}">
                            {
                                !state.loadingIngredient &&
                                <BurgerConstructor deleteIngredient={dispatch} addOrder={dispatch}/>
                            }
                        </li>
                    </ul>
                </BurgerContext.Provider>
                }
                {
                    showModal && textErrorForModal !== '' &&
                    <Modal onClose={handleCloseModal}><ErrorMessage message={textErrorForModal}/></Modal>
                }
            </main>
        </>
    );
}

export default App;
