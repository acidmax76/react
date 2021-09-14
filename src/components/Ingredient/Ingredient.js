import React from 'react';
import IngredientStyle from './Ingredient.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function Ingredient({image, price, name, count = 0}) {
    return (
        <div className={IngredientStyle.ingredients__card}>
            <a className="ingredients__card-link" href="/">
                <img className={IngredientStyle.ingredients__card_image} src={image}
                     alt="картинка товара"/>
                {count > 0 &&
                    <Counter count={count}/>
                }
                <p className={IngredientStyle.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{price}</span>
                    <CurrencyIcon type={"primary"}/>
                </p>
                <p className={IngredientStyle.ingredients__card_name + " pb-6"}>{name}</p>
            </a>
        </div>
    );
}

Ingredient.propTypes =  {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        count: PropTypes.number,
};

export default Ingredient;