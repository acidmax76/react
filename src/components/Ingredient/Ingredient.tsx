import React, {FC} from 'react';
import styles from './Ingredient.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {IIngredientProps} from "../../serivice/interfaces/IIngredientProps";


export const Ingredient:FC<IIngredientProps> = ({data,count}) => {
    const {image_mobile,price,name} = data;
    const [, dragRef] = useDrag({
        type: "ingredient",
        item: data
    });
    return (
        <div ref={dragRef}>
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

