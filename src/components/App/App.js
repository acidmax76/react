import React, {useState, useEffect, useReducer} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import {InitialState} from "../../serivice/initialState";
import {UserContext} from "../../serivice/userContext";
import {reducer} from "../../serivice/reducers/app";
import {SUCCESS_LOAD_INGREDIENTS,FAILED_LOAD_INGREDIENTS,LOADING_INGREDIENTS} from "../../serivice/actions/app";

function App() {
    const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

    // описание  state :
    // {
    //  ingredients : [{
    //      calories: number - кол-во калориев
    //      carbohydrates: - кол-во  углеводов
    //      fat: - кол-во жиров
    //      image: string ссылка на картинку
    //      image_large: string ссылка на большую картинку
    //      image_mobile: string ссылка на маленькую картинку
    //      name: string - название ингредиента
    //      price: number - цена
    //      proteins: number - кол-во белков
    //      type: string - тип ингредиента "bun"-булка "sauce"- соус "main"-начинки
    //      __v: number - пока не понятно
    //  }] - список ингредиентов из апи
    //  loadingIngredient: bool - стартовала загрузка ингредиентов из апи
    //  hasErrorLoadIngredient: bool - ошибка при загрузке
    //  needFetchIngredients : bool - надо бы обновить список ингредиентов
    //  constructor:[
    //      {
    //          name: string - имя ингредиента
    //          price: number - цена ингредиента
    //          image: string - ссылка на изображение
    //          lock : bool - можно ли удалить ингредиент
    //          key: string - ид для key в конструкторе
    //          id: number - _id в списке ингрединетов
    //      }
    //  ] - массив выбранных ингредиентов для бургера
    //  orders:[{
    //      name: string - название бургера
    //      number:number - номер заказа
    //      date: date - дата и время заказа
    //  }] - массив заказов
    //
    //  }

    const [state, dispatch] = useReducer(reducer,InitialState);

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
            } catch (e) {
                dispatch({type:FAILED_LOAD_INGREDIENTS});
                console.log(e.message);
            }
        };
        getData(state.needFetchIngredients);
    }, []);

    return (

        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                {!state.hasErrorLoadIngredient &&
                <UserContext.Provider value={state}>
                    <ul className={AppStyles.container + ' ' + AppStyles.content}>
                        <li className={AppStyles.content__block + " mr-10"}>
                            {
                                !state.loadingIngredient &&
                                <BurgerIngredients />
                            }
                        </li>
                        <li className="{AppStyles.content__block}">
                            {
                                !state.loadingIngredient &&
                                <BurgerConstructor />
                            }
                        </li>
                    </ul>
                </UserContext.Provider>
                }
                {
                    state.hasErrorLoadIngredient &&
                    <div className={AppStyles.error}> Что то пошло не так , обновите страницу! </div>
                }
            </main>
        </>
    );
}

export default App;
