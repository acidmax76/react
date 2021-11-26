import styles from "./ingredient.module.css";
import {useParams} from "react-router-dom";
import {useSelector} from "../../serivice/types";
import {getItems} from "../../serivice/BurgerIngredients/selectors";
import {FC} from "react";
import {IIngredientPageProps} from "../../serivice/interfaces/IIngredientPageProps";

export const IngredientPage:FC<IIngredientPageProps> = ({modal}) => {
    const {id} = useParams<{id?: string}>();
    const items = useSelector(getItems);
    const item = items.filter((element)=>(element._id === id))[0];
    return (
        item ?
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={!modal ? styles.main : ""}>
                    { !modal &&
                        <div className={styles.header + " text text_type_main-large"}>Детали ингредиента</div>
                    }
                    <div className={styles.image}>
                        <img src={item.image_large} alt={item.name} />
                    </div>
                    <div className={styles.description}>
                        {item.name}
                    </div>
                    <div className={styles.digits}>
                            <div className={styles.item}>
                                <div> Калории, ккал</div>
                                <div className={"mt-2 text text_type_digits-default"}>{item.calories}</div>
                            </div>
                        <div className={styles.item}>
                            <div> Белки, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>{item.proteins}</div>
                        </div>
                        <div className={styles.item}>
                            <div> Жиры, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>{item.fat}</div>
                        </div>
                        <div className={styles.item}>
                            <div> Углеводы, г</div>
                            <div className={"mt-2 text text_type_digits-default"}>{item.carbohydrates}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            :
            <div/>
    );
}
