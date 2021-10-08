import styles from './IngredientDetails.module.css';
import {useSelector} from "react-redux";
import {getIngredients} from "../../serivice/IngredientDetails/selector";

const IngredientDetails = () => {
    const {modalIngredient} = useSelector(getIngredients);
    const {image_large,calories,proteins,carbohydrates,fat,name} = modalIngredient;
    return (
        <>
            <div className={styles.img}>
                <img src={image_large} alt={name}/>
            </div>
            <div className={styles.name + " mt-4"}>
                {name}
            </div>
            <div className={styles.description + " mt-5"}>
                <div className={styles.opisanie + ' ml-5'}>
                    <span>Калории, ккал</span>
                    <span className={styles.digital}>{calories}</span>
                </div>
                <div className={styles.opisanie + ' ml-5'}>
                    <span>Белки, г</span>
                    <span className={styles.digital}>{proteins}</span>
                </div>
                <div className={styles.opisanie + ' ml-5'}>
                    <span>Жиры, г</span>
                    <span className={styles.digital}>{fat}</span>
                </div>
                <div className={styles.opisanie + ' ml-5'}>
                    <span>Углеводы, г</span>
                    <span className={styles.digital}>{carbohydrates}</span>
                </div>

            </div>
        </>
    );
}

export default IngredientDetails;
