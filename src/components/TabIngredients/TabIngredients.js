import style from "./TabIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import React from "react";
import PropTypes from "prop-types";

export function TabIngredients(props) {
    return (
        <li className="ingredients__content-item">
            <h3 className="ingredients__content-title text_type_main-medium mb-6">{props.name}</h3>
            <div className={style.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                {props.currentTab.items.map(item => {
                    const count = props.count[item._id];
                    return <Ingredient key={item._id} data={item} count={count}
                                       onClick={() => props.onClick(item)}
                                       onClose={props.onClose}/>
                })}
            </div>
        </li>
    );
}

TabIngredients.propTypes = {
    count: PropTypes.shape(),
    currentTab: PropTypes.shape({
        type: PropTypes.oneOf(['buns', 'sauce', 'main']).isRequired,
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string,
                name: PropTypes.string,
                price: PropTypes.number,
                image_mobile: PropTypes.string,
                type: PropTypes.oneOf(['sauce', 'main', 'bun']),
            })
        )
    })
}
;