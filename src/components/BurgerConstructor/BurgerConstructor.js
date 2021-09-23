import React, {useContext, useMemo, useState} from 'react';
import {CurrencyIcon, DragIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from './BurgerConstructor.module.css';
import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import OrderDetails from '../OrderDetails/OrderDetails';
import {BurgerContext} from "../../serivice/BurgerContext";
import {DELETE_INGREDIENT_FROM_CONSTRUCTOR} from "../../serivice/actions/app";
import {v4} from "uuid";

function BurgerConstructor(props) {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const {constructor} = useContext(BurgerContext);
    const item = constructor.ingredients.filter(item => item.type !== 'bun');
    const bun = constructor.bun;
    const cost = useMemo(() => {
        const costBan = bun ? bun.price * 2 : 0;
        const costIngredients = constructor.ingredients.reduce((total, value) => total + value.price, 0);
        return costBan + costIngredients;
    }, [constructor]);
    const handleDeleteIngredient = (data) => {
        props.onDeleteIngredient({
            type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: data,
        });

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
                        const key=v4();
                            return (<li key={key}
                                        className={ConstructorStyle.constructor__item + " constructor-element__row mb-2"}>
                                <div className={ConstructorStyle.constructor__drag + " mr-2"}>
                                    <DragIcon key={key} type={"primary"}/>
                                </div>
                                <ConstructorElement key={key} text={item.name} thumbnail={item.image_mobile} price={item.price}
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
            {showModal && <Modal onClose={handleCloseModal}><OrderDetails/></Modal>}
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image_mobile: PropTypes.string,
        type: PropTypes.oneOf(['sauce', 'main', 'bun']),
    }))
};
export default BurgerConstructor;