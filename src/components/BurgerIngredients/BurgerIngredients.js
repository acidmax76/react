import React from 'react';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyle from './BurgerIngredients.css';

function BurgerIngredients() {
    return (
        <section className="ingredients pt-10 pb-10">
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className="ingredients__nav-list">
                    <li className="ingredients__nav-item pt-4 pb-4 active">Булки</li>
                    <li className="ingredients__nav-item pt-4 pb-4">Соусы</li>
                    <li className="ingredients__nav-item pt-4 pb-4">Начинки</li>
                </ul>
            </nav>
            <div className="ingredients__content custom-scroll">
                <ul className="ingredients__content-list" >
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Булки</h3>
                        <div className="ingredients__content-cards mt-6 mb-10 ml-4 mr-4">
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/bun-02.png" alt="картинка товара"/>
                                    <p className="ingredients__card-count text_type_digits-default">1</p>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/bun-01.png" alt="картинка товара"/>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/bun-02.png" alt="картинка товара"/>
                                    <p className="ingredients__card-count text_type_digits-default">1</p>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/bun-01.png" alt="картинка товара"/>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Соусы</h3>
                        <div className="ingredients__content-cards mt-6 mb-10 ml-4 mr-4">
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/sauce-02.png" alt="картинка товара"/>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="картинка товара"/>
                                    <p className="ingredients__card-count text_type_digits-default">1</p>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Начинка</h3>
                        <div className="ingredients__content-cards mt-6 mb-10 ml-4 mr-4">
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/meat-04.png" alt="картинка товара"/>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                            <div className="ingredients__card">
                                <a className="ingredients__card-link" href="#0">
                                    <img className="ingredients__card-image" src="https://code.s3.yandex.net/react/code/meat-01.png" alt="картинка товара"/>
                                    <p className="ingredients__card-count text_type_digits-default">1</p>
                                    <p className="ingredients__card-price mt-1 mb-1">
                                        <span className="ingredients__card-price-value text_type_digits-default mr-2">20</span>
                                        <CurrencyIcon type={"primary"}/>
                                    </p>
                                    <p className="ingredients__card-name pb-6">Краторная булка</p>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default BurgerIngredients;