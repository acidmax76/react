import style from "./TabIngredients.module.css";
import Ingredient from "../Ingredient/Ingredient";
import React from "react";

export function TabIngredients(props) {
    const count = 0;
    return (
    <li className="ingredients__content-item">
        <h3 className="ingredients__content-title text_type_main-medium mb-6">{props.name}</h3>
        <div className={style.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
            {props.items.map(item => {
                return <Ingredient key={item._id} data={item} count={count}
                                   onClick={() => props.onClick(item)}
                                   onClose={props.onClose}/>
            })}
        </div>
    </li>
    );
}