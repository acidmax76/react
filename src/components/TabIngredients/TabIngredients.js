import styles from "./TabIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import React from "react";
import PropTypes from "prop-types";

export function TabIngredients(props) {
    const {name,count,ingredients,onClose} = props;
    return (
        <>
            <h3 className="ingredients__content-title text_type_main-medium mb-6" >{name}</h3>
            <div className={styles.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                {
                    ingredients.map(item => {
                    const qty = count[item._id];
                    return <Ingredient key={item._id} data={item} count={qty}
                                       onClick={() => props.onClick(item)}
                                       onClose={onClose}/>
                })}
            </div>
        </>
    );
}

TabIngredients.propTypes = {
    name: PropTypes.string,
    count: PropTypes.shape(),
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            image_mobile: PropTypes.string,
            type: PropTypes.oneOf(['sauce', 'main', 'bun']),
        })
    ),
}
;