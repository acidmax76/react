import React from 'react';
import styles from './Ingredient.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {useDrag} from "react-dnd";

export const Ingredient = (props) => {
    const {data,count,onClick} = props;
    const {image_mobile,price,name} = data;
    const [, dragRef] = useDrag({
        type: "ingredient",
        item: props.data
    });
    return (
        <div ref={dragRef}
             onClick={onClick}>
                <img className={styles.ingredients__card_image} src={image_mobile}
                     alt="картинка товара" />
                {count > 0 &&
                    <Counter count={count}/>
                }
                <p className={styles.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{price}</span>
                    <CurrencyIcon type={"primary"}/>
                </p>
                <p className={styles.ingredients__card_name + " pb-6"}>{name}</p>
        </div>
    );
}

Ingredient.propTypes =  {
    count: PropTypes.number,
    data: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image_mobile: PropTypes.string,
    }),
};
