import styles from "./TabIngredients.module.css";
import {Ingredient} from "../Ingredient/Ingredient";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {ITabIngredientProps} from "../../serivice/interfaces/ITabIngredientProps";

export const TabIngredients:FC<ITabIngredientProps> = ({name, count, ingredients,location}) => {
    return (
        <>
            <h3 className="ingredients__content-title text_type_main-medium mb-6">{name}</h3>
            <div className={styles.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                {
                    ingredients.map(item => {
                        const qty = count[item._id];
                        return <Link key={item._id} className={styles.ingredients__card} to={{pathname:"/ingredients/"+item._id, state: {modal:location,type:"ingredient"}}}>
                            <Ingredient key={item._id} data={item} count={qty}/>
                        </Link>

                    })}
            </div>
        </>
    );
}
