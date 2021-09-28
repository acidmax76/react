import style from './IngredientDetails.module.css';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const IngredientDetails = (props) => {
    const {modalIngredient} = useSelector(store=>store.BurgerIngredientsReducer);
    const {image_large,calories,proteins,carbohydrates,fat,name} = modalIngredient;
    return (
        <>
            <div className={style.img}>
                <img src={image_large} alt={name}/>
            </div>
            <div className={style.name + " mt-4"}>
                {name}
            </div>
            <div className={style.description + " mt-5"}>
                <div className={style.opisanie + ' ml-5'}>
                    <span>Калории, ккал</span>
                    <span className={style.digital}>{calories}</span>
                </div>
                <div className={style.opisanie + ' ml-5'}>
                    <span>Белки, г</span>
                    <span className={style.digital}>{proteins}</span>
                </div>
                <div className={style.opisanie + ' ml-5'}>
                    <span>Жиры, г</span>
                    <span className={style.digital}>{fat}</span>
                </div>
                <div className={style.opisanie + ' ml-5'}>
                    <span>Углеводы, г</span>
                    <span className={style.digital}>{carbohydrates}</span>
                </div>

            </div>
        </>
    );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    data: PropTypes.shape({
        image_large: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })
};