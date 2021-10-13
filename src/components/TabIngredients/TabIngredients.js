import styles from "./TabIngredients.module.css";
import {Ingredient} from "../Ingredient/Ingredient";
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const TabIngredients = (props) => {
    const {name, count, ingredients,location} = props;
    return (
        <>
            <h3 className="ingredients__content-title text_type_main-medium mb-6">{name}</h3>
            <div className={styles.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                {
                    ingredients.map(item => {
                        const qty = count[item._id];
                        return <Link key={item._id} className={styles.ingredients__card} to={{pathname:"/ingredients/"+item._id, state: {modal:location}}}>
                            <Ingredient key={item._id} data={item} count={qty}
                            />
                        </Link>

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