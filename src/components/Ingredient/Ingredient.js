import React from 'react';
import IngredientStyle from './Ingredient.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {useDrag} from "react-dnd";

function Ingredient(props) {
    const [, dragRef] = useDrag({
        type: "ingredient",
        item: props.data
    });
    return (
        <div ref={dragRef} className={IngredientStyle.ingredients__card} onClick={props.onClick}>
                <img className={IngredientStyle.ingredients__card_image} src={props.data.image_mobile}
                     alt="картинка товара" />
                {props.count > 0 &&
                    <Counter count={props.count}/>
                }
                <p className={IngredientStyle.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{props.data.price}</span>
                    <CurrencyIcon type={"primary"}/>
                </p>
                <p className={IngredientStyle.ingredients__card_name + " pb-6"}>{props.data.name}</p>
        </div>
    );
}

Ingredient.propTypes =  {
    count: PropTypes.number,
    data: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image_mobile: PropTypes.string,
        type: PropTypes.oneOf(['sauce', 'main', 'bun']),
    }),
};

export default Ingredient;