import React from 'react';
import {CurrencyIcon, DeleteIcon, LockIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from './BurgerConstructor.module.css';

function BurgerConstructor() {
    return (
        <section className={ConstructorStyle.constructor + " pt-25 pb-10"}>
            <div className="constructor__content pl-4">
                <div className={ConstructorStyle.constructor__item + " mr-4 pl-8"}>
                    <div
                        className={"constructor-element constructor-element_pos_top constructor-element__row " + ConstructorStyle.background}>
                        <img className="constructor-element__image"
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt="Ингридиент"/>
                        <p className="constructor-element__text">
                            Краторная булка N-200i (верх)
                        </p>
                        <div className="constructor-element__price">
                            <span>20</span>
                            <CurrencyIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element__action">
                            <LockIcon type={"secondary"}/>
                        </div>
                    </div>
                </div>

                <ul className={ConstructorStyle.constructor__list + " custom-scroll mt-4 mb-4"}>
                    <li className={ConstructorStyle.constructor__item + " constructor-element__row"}>
                        <div className={ConstructorStyle.constructor__drag + " mr-2"}>
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className={"constructor-element constructor-element__row mb-4 " + ConstructorStyle.background}>
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                    <li className="constructor__item constructor-element__row">
                        <div className="constructor__drag mr-2">
                            <DragIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element constructor-element__row">
                            <img className="constructor-element__image"
                                 src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="Ингридиент"/>
                            <p className="constructor-element__text">
                                Соус традиционный галактический
                            </p>
                            <div className="constructor-element__price">
                                <span>15</span>
                                <CurrencyIcon type={"primary"}/>
                            </div>
                            <div className="constructor-element__action">
                                <DeleteIcon type={"primary"}/>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="constructor__item mr-4 pl-8">
                    <div
                        className={"constructor-element constructor-element_pos_bottom constructor-element__row " + ConstructorStyle.background}>
                        <img className="constructor-element__image"
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt="Ингридиент"/>
                        <p className="constructor-element__text">
                            Краторная булка N-200i (низ)
                        </p>
                        <div className="constructor-element__price">
                            <span>20</span>
                            <CurrencyIcon type={"primary"}/>
                        </div>
                        <div className="constructor-element__action">
                            <LockIcon type={"secondary"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ConstructorStyle.constructor__footer + " mt-10"}>
                <div className={ConstructorStyle.constructor__price + " mr-10"}>
                    <span className="constructor__price-value text_type_digits-medium mr-2">610</span>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <a className="button pt-5 pb-5 pl-10 pr-10" href="#0">Оформить заказ</a>
            </div>
        </section>
    );
}

export default BurgerConstructor;