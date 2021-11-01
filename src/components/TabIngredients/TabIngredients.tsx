import styles from "./TabIngredients.module.css";
import {Ingredient} from "../Ingredient/Ingredient";
import React, {FC} from "react";
import {Link} from "react-router-dom";

export type TIngredient = {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    proteins: number,
    __v: number,
    _id: number,
    name: string,
    price: number,
    image_mobile: string,
    type: 'sauce' | 'main' | 'bun',
    key:string
}

type TIngredientProps ={
    name:string,
    count:number[],
    ingredients:TIngredient[],
    location:Location
}

export const TabIngredients:FC<TIngredientProps> = ({name, count, ingredients,location}) => {
    return (
        <>
            <h3 className="ingredients__content-title text_type_main-medium mb-6">{name}</h3>
            <div className={styles.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                {
                    ingredients.map(item => {
                        const qty = count[item._id];
                        return <Link key={item._id} className={styles.ingredients__card} to={{pathname:"/ingredients/"+item._id, state: {modal:location}}}>
                            <Ingredient key={item._id} data={item} count={qty}/>
                        </Link>

                    })}
            </div>
        </>
    );
}
