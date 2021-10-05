import React, { useMemo, useState,useCallback} from 'react';
import {CurrencyIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import Modal from "../Modal/Modal";
import OrderDetails from '../OrderDetails/OrderDetails';
import {v4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ConstructorIngredient} from "../ConstructorIngredient/ConstructorIngredient";
import {ADD_INGREDIENT_TO_CONSTRUCTOR,DELETE_ALL_FROM_CONSTRUCTOR,DELETE_INGREDIENT_FROM_CONSTRUCTOR,MOVE_CARD} from "../../serivice/BurgerConstructor/actions";

const BurgerConstructor = () => {

    const {bun, items} = useSelector(store => store.BurgerConstructorReducer.constructor);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const cost = useMemo(() => {
        const costBan = bun ? bun.price * 2 : 0;
        const costIngredients = items.reduce((total, value) => total + value.price, 0);
        return costBan + costIngredients;
    }, [bun, items]);
    const handleDeleteIngredient = (data) => {
        dispatch({
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
        dispatch({
            type:DELETE_ALL_FROM_CONSTRUCTOR
        });
    }
    const handleDrop = (item) => {
        const newItem = {...item};
        newItem.key=v4();
        dispatch({
            type:ADD_INGREDIENT_TO_CONSTRUCTOR,
            item:newItem
        });
    };
    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(item) {
            handleDrop(item);
        },
    });
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = items[dragIndex];
            dispatch({
                    type: MOVE_CARD,
                    item:{
                        dragIndex:dragIndex,
                        hoverIndex:hoverIndex,
                        dragCard:dragCard
                    }
                }
            );
    }, // eslint-disable-next-line
        [items]);

    return (
        <section className={styles.constructor + " pt-25 pb-10"}>
            <div ref={dropTarget} className="constructor__content pl-4" >
                <div className={styles.constructor__item + " mr-4 pl-8"}>
                    {
                        bun ?
                            <ConstructorElement type="top" isLocked={true} text={bun.name + "(верх)"} price={bun.price}
                                                thumbnail={bun.image_mobile}/>
                            : <div className={styles.constructor__text}> Перетащите сюда булку </div>
                    }
                </div>
                {items.length ?
                    <ul className={styles.constructor__list + " custom-scroll mt-4 mb-4"}>
                        {items.map((item, index) => {
                            return <ConstructorIngredient key={index} index={index} item={item} moveCard={moveCard} deleteCard={()=>handleDeleteIngredient(index)}/>
                        })}
                    </ul>
                    :
                    <ul className={styles.constructor__list + ' ' + styles.constructor__ingredient__text + " mt-4 mb-4"}>
                        <div className={styles.constructor__text}> Перетащите сюда начинку</div>
                    </ul>
                }

                <div className="constructor__item mr-4 pl-8">
                    {
                        bun ?
                            <ConstructorElement type="bottom" isLocked={true} text={bun.name + "(низ)"}
                                                price={bun.price} thumbnail={bun.image_mobile}/>
                            : <div className={styles.constructor__text}> Перетащите сюда булку </div>
                    }

                </div>
            </div>
            <div className={styles.constructor__footer + " mt-10"}>
                <div className={styles.constructor__price + " mr-10"}>
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