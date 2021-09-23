import React, {useContext, useMemo, useState} from 'react';
import {CurrencyIcon, DragIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from './BurgerConstructor.module.css';
import Modal from "../Modal/Modal";
import OrderDetails from '../OrderDetails/OrderDetails';
import {BurgerContext} from "../../serivice/BurgerContext";
import {
    DELETE_INGREDIENT_FROM_CONSTRUCTOR, ADD_ORDER
} from "../../serivice/actions/app";
import {v4} from "uuid";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";

function BurgerConstructor(props) {
    const API_URL = 'https://norma.nomoreparties.space/api/orders';
    const [showModal, setShowModal] = useState(false);
    const [textErrorForModal, setTextErrorForModal] = useState('');
    const {constructor,orders} = useContext(BurgerContext);
    const item = constructor.ingredients.filter(item => item.type !== 'bun');
    const bun = constructor.bun;
    const cost = useMemo(() => {
        const costBan = bun ? bun.price * 2 : 0;
        const costIngredients = item.reduce((total, value) => total + value.price, 0);
        return costBan + costIngredients;
    }, [bun,item]);
    const handleDeleteIngredient = (data) => {
        props.deleteIngredient({
            type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: data,
        });

    }
    const handleShowModal = () => {
        if (bun && cost > 0) {
            const ingredients = item.map(element => element._id);
            ingredients.push(bun._id);
            ingredients.push(bun._id);
            const getOrder = async () => {
                try {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ingredients: ingredients})
                    };
                    const res = await fetch(API_URL, requestOptions);
                    if (!res.ok) {
                        setShowModal(true);
                        setTextErrorForModal('Ответ сети был не ok.');
                    }
                    const data = await res.json()
                    if (data.success) {
                        props.addOrder({
                            type: ADD_ORDER,
                            payload: data,
                        });
                        setShowModal(true);
                        setTextErrorForModal('');
                        console.log(orders);
                    } else {
                        setShowModal(true);
                        setTextErrorForModal('Пришел ответ отличный от success=true');
                    }
                } catch (e) {
                    setShowModal(true);
                    setTextErrorForModal('Невозможно оформить заказ ! Ошибка в сети (' +e.message+')');
                }
            };
            getOrder();
        } else {
            setShowModal(true);
            setTextErrorForModal('Выберите булку и ингредиенты !');
        }
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <section className={ConstructorStyle.constructor + " pt-25 pb-10"}>
            <div className="constructor__content pl-4">
                <div className={ConstructorStyle.constructor__item + " mr-4 pl-8"}>
                    {bun &&
                    <ConstructorElement type="top" isLocked={true} text={bun.name + "(верх)"} price={bun.price}
                                        thumbnail={bun.image_mobile}/>
                    }
                </div>
                <ul className={ConstructorStyle.constructor__list + " custom-scroll mt-4 mb-4"}>
                    {item.map((item, index) => {
                            const key = v4();
                            return (<li key={key}
                                        className={ConstructorStyle.constructor__item + " constructor-element__row mb-2"}>
                                <div className={ConstructorStyle.constructor__drag + " mr-2"}>
                                    <DragIcon key={key} type={"primary"}/>
                                </div>
                                <ConstructorElement key={key} text={item.name} thumbnail={item.image_mobile}
                                                    price={item.price}
                                                    isLocked={false} handleClose={() => handleDeleteIngredient(index)}/>
                            </li>)
                        }
                    )}
                </ul>

                <div className="constructor__item mr-4 pl-8">
                    {
                        bun &&
                        <ConstructorElement type="bottom" isLocked={true} text={bun.name + "(низ)"} price={bun.price}
                                            thumbnail={bun.image_mobile}/>
                    }

                </div>
            </div>
            <div className={ConstructorStyle.constructor__footer + " mt-10"}>
                <div className={ConstructorStyle.constructor__price + " mr-10"}>
                    <span className="constructor__price-value text_type_digits-medium mr-2">{cost}</span>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <span className="pt-5 pb-5 pl-10 pr-15">
                {<Button type="primary" size="medium" onClick={handleShowModal}>
                    Оформить заказ
                </Button>}
                    </span>
            </div>
            {showModal && textErrorForModal === '' && <Modal onClose={handleCloseModal}><OrderDetails order={orders[orders.length-1]}/></Modal>}
            {showModal && textErrorForModal !== '' && <Modal onClose={handleCloseModal}><ErrorMessage message={textErrorForModal}/></Modal>}
        </section>
    );
}

export default BurgerConstructor;