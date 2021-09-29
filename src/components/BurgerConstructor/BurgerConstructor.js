import React, { useMemo, useState} from 'react';
import {CurrencyIcon, DragIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from './BurgerConstructor.module.css';
import Modal from "../Modal/Modal";
import OrderDetails from '../OrderDetails/OrderDetails';
import {DELETE_INGREDIENT_FROM_CONSTRUCTOR, ADD_INGREDIENT_TO_CONSTRUCTOR} from "../../serivice/actions/app";
import {v4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";

function BurgerConstructor(props) {

    const {bun, items} = useSelector(store => store.BurgerConstructorReducer.constructor);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const cost = useMemo(() => {
        const costBan = bun ? bun.price * 2 : 0;
        const costIngredients = items.reduce((total, value) => total + value.price, 0);
        return costBan + costIngredients;
    }, [bun, items]);
    const handleDeleteIngredient = (data) => {
        props.deleteIngredient({
            type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: data,
        });

    }
    const handleShowModal = () => {
        if (bun && cost > 0) {
            setShowModal(true);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleDrop = (item) => {
        dispatch({
            type:ADD_INGREDIENT_TO_CONSTRUCTOR,
            item:item
        });
    };

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item) {
            handleDrop(item);
        },
    });
    return (
        <section className={ConstructorStyle.constructor + " pt-25 pb-10"}>
            <div ref={dropTarget} className="constructor__content pl-4" >
                <div className={ConstructorStyle.constructor__item + " mr-4 pl-8"}>
                    {
                        bun ?
                            <ConstructorElement type="top" isLocked={true} text={bun.name + "(верх)"} price={bun.price}
                                                thumbnail={bun.image_mobile}/>
                            : <div className={ConstructorStyle.constructor__text}> Перетащите сюда булку </div>
                    }
                </div>
                {items.length ?
                    <ul className={ConstructorStyle.constructor__list + " custom-scroll mt-4 mb-4"}>
                        {items.map((item, index) => {
                            const key = v4();
                            return (<li key={key}
                                        className={ConstructorStyle.constructor__item + " constructor-element__row mb-2"}>
                                <div className={ConstructorStyle.constructor__drag + " mr-2"}>
                                    <DragIcon key={key} type={"primary"}/>
                                </div>
                                <ConstructorElement key={key} text={item.name} thumbnail={item.image_mobile}
                                                    price={item.price}
                                                    isLocked={false}
                                                    handleClose={() => handleDeleteIngredient(index)}
                                />
                            </li>)
                        })}
                    </ul>
                    :
                    <ul className={ConstructorStyle.constructor__list + ' ' + ConstructorStyle.constructor__ingredient__text + " mt-4 mb-4"}>
                        <div className={ConstructorStyle.constructor__text}> Перетащите сюда начинку</div>
                    </ul>
                }

                <div className="constructor__item mr-4 pl-8">
                    {
                        bun ?
                            <ConstructorElement type="bottom" isLocked={true} text={bun.name + "(низ)"}
                                                price={bun.price} thumbnail={bun.image_mobile}/>
                            : <div className={ConstructorStyle.constructor__text}> Перетащите сюда булку </div>
                    }

                </div>
            </div>
            <div className={ConstructorStyle.constructor__footer + " mt-10"}>
                <div className={ConstructorStyle.constructor__price + " mr-10"}>
                    <span className="constructor__price-value text_type_digits-medium mr-2">
                        {cost}
                    </span>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <span className="pt-5 pb-5 pl-10 pr-15">
                {<Button type="primary" size="medium"
                         onClick={handleShowModal}
                >
                    Оформить заказ
                </Button>}
                    </span>
            </div>
            {showModal &&
            <Modal onClose={handleCloseModal}><OrderDetails /></Modal>}
        </section>
    );
}

export default BurgerConstructor;