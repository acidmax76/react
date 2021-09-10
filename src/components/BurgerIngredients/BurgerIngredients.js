import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients() {
    return (
        <section className="ingredients">
            <h2> Соберите бургер</h2>
            <nav className="ingredients-nav">
                <ul>
                    <li>Булки</li>
                    <li>Соусы</li>
                    <li>Начинки</li>
                </ul>
            </nav>
            <div className="ingredients-list">
                <ul>
                    <li className="ingredients-list-header">
                        Булки
                        <div className="ingredients-list-card-list">
                            <card>
                                <a href="#">
                                    <img className="card-image" alt="картинка товара"/>
                                    <p className="card-qty">1</p>
                                    <p className="card-price">
                                        <label>20</label>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="card-name">Краторная булка</p>
                                </a>
                            </card>
                            <card>
                                <a href="#">
                                    <img className="card-image" alt="картинка товара"/>
                                    <p className="card-price">
                                        <label>20</label>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="card-name">Краторная булка</p>
                                </a>
                            </card>
                        </div>
                    </li>
                    <li className="ingredients-list-header">
                        Соусы
                        <div className="ingredients-list-card-list">
                            <card>
                                <a href="#">
                                    <img className="card-image" alt="картинка товара"/>
                                    <p className="card-price">
                                        <label>20</label>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="card-name">Краторная булка</p>
                                </a>
                            </card>
                            <card>
                                <a href="#">
                                    <img className="card-image" alt="картинка товара"/>
                                    <p className="card-qty">1</p>
                                    <p className="card-price">
                                        <label>20</label>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="card-name">Краторная булка</p>
                                </a>
                            </card>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default BurgerIngredients;