import React from 'react';
import {CurrencyIcon,DeleteIcon,LockIcon,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(){
    return (
        <section className="constructor">
            <ul className="constructor-list">
                <li className="constructor-list-card">
                    <p className="constructor-list-card-name"><DragIcon type="primary"/></p>
                    <img className="constructor-list-card-image" alt="картинка" />
                    <p className="constructor-list-card-name">Краторная булка</p>
                    <p className="constructor-list-card-price">
                        <label>20</label>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                    <p className="constructor-list-card-trash"><LockIcon type={"primary"} /></p>
                </li>
                <li className="constructor-list-card">
                    <p className="constructor-list-card-name"><DragIcon type="primary"/></p>
                    <img className="constructor-list-card-image" alt="картинка" />
                    <p className="constructor-list-card-name">Краторная булка</p>
                    <p className="constructor-list-card-price">
                        <label>20</label>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                    <p className="constructor-list-card-trash"><DeleteIcon type={"primary"} /></p>
                </li>
                <li className="constructor-list-card">
                    <p className="constructor-list-card-name"><DragIcon type="primary"/></p>
                    <img className="constructor-list-card-image" alt="картинка" />
                    <p className="constructor-list-card-name">Краторная булка</p>
                    <p className="constructor-list-card-price">
                        <label>20</label>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                    <p className="constructor-list-card-trash"><DeleteIcon type={"primary"} /></p>
                </li>
                <li className="constructor-list-card">
                    <p className="constructor-list-card-name"><DragIcon type="primary"/></p>
                    <img className="constructor-list-card-image" alt="картинка" />
                    <p className="constructor-list-card-name">Краторная булка</p>
                    <p className="constructor-list-card-price">
                        <label>20</label>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                    <p className="constructor-list-card-trash"><LockIcon type={"primary"} /></p>
                </li>
            </ul>
        </section>
    );
}
export default BurgerConstructor;