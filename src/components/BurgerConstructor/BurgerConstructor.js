import React from 'react';
import {CurrencyIcon, DragIcon,Button,ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyle from './BurgerConstructor.module.css';
import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

function BurgerConstructor(props) {
    const top = {
        "name":"Краторная булка N-200i (верх)",
        "price" : 1255,
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png"
    }
    const bottom = {
        "name":"Краторная булка N-200i (низ)",
        "price" : 1255,
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png"
    }
    const item = props.data.filter(item=>item.type !== 'bun');
    return (
        <section className={ConstructorStyle.constructor + " pt-25 pb-10"}>
            <div className="constructor__content pl-4">
                <div className={ConstructorStyle.constructor__item + " mr-4 pl-8"}>
                    {<ConstructorElement type="top" isLocked={true} text={top.name} price={top.price} thumbnail={top.image_mobile} />}
                </div>
                <ul className={ConstructorStyle.constructor__list + " custom-scroll mt-4 mb-4"}>
                    {item.map(item => {
                         return (<li key={item._id} className={ConstructorStyle.constructor__item + " constructor-element__row mb-2"}>
                                <div className={ConstructorStyle.constructor__drag + " mr-2"}>
                                    <DragIcon type={"primary"}/>
                                </div>
                                <ConstructorElement text={item.name} thumbnail={item.image_mobile} price={item.price} isLocked={false} />
                            </li>)
                        }
                        )}
                </ul>

                <div className="constructor__item mr-4 pl-8">
                    {<ConstructorElement type="bottom" isLocked={true} text={bottom.name} price={bottom.price} thumbnail={bottom.image_mobile} />}

                </div>
            </div>
            <div className={ConstructorStyle.constructor__footer + " mt-10"}>
                <div className={ConstructorStyle.constructor__price + " mr-10"}>
                    <span className="constructor__price-value text_type_digits-medium mr-2">610</span>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <span className="pt-5 pb-5 pl-10 pr-15">
                {<Button  type="primary" size="medium">
                    Оформить заказ
                </Button>}
                    </span>
            </div>
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