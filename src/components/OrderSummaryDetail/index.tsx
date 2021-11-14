import styles from "../ClientOrderSummary/index.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from "react";

interface OrderSummaryDetailProps  {
    image:string,
    name:string,
    price:number
    qty:number
}

export const OrderSummaryDetail:FC<OrderSummaryDetailProps> = ({image,name,price,qty}) => {

    return(
    <div className={styles.ingredients_row}>
        <div className={styles.ingredient_preview}>
            <img className={styles.row_image}
                 src={image} alt={name}/>
        </div>
        <div className={styles.row_name}>
            <div className={styles.row_name_left}>
                {name}
            </div>
        </div>
        <div className={styles.row_price}>
            <div className={styles.price}>
                {qty} X {price}
            </div>
            <div className={styles.icon}>
                <CurrencyIcon type={"primary"}/>
            </div>
        </div>
    </div>
    )
}