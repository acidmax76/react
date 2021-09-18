import React, {useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import Ingredient from '../Ingredient/Ingredient';
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function BurgerIngredients(props) {
    const [currentTab, setCurrentTab] = useState("buns");
    const [showModal, setShowModal] = useState(false);
    const [dataForModal,setDataForModal] = useState(null);
    const buns = props.data.filter(element => element.type === "bun");
    const sauce = props.data.filter(element => element.type === "sauce");
    const main = props.data.filter(element => element.type === "main");

    const handleClickIngredients = (data) => {
        setShowModal(true);
        setDataForModal(data);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <section className={BurgerIngredientStyle.ingredients + " pt-10 pb-10"}>
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className={BurgerIngredientStyle.ingredients__nav_list}>
                    <Tab value='buns' active={currentTab === "buns"} onClick={setCurrentTab}>
                        Булки
                    </Tab>
                    <Tab value='main' active={currentTab === "main"} onClick={setCurrentTab}>
                        Начинки
                    </Tab>
                    <Tab value='sauce' active={currentTab === "sauce"} onClick={setCurrentTab}>
                        Соусы
                    </Tab>

                </ul>
            </nav>
            <div className={BurgerIngredientStyle.ingredients__content + " custom-scroll"}>
                <ul className="ingredients__content-list">
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Булки</h3>
                        <div className={BurgerIngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                            {buns.map(item => {
                                const count = Math.random() > 0.5 ? 1 : 0;
                                return <Ingredient key={item._id} data={item} count={count}
                                                   onClick={() => handleClickIngredients(item)} onClose={handleCloseModal}/>
                            })}
                        </div>
                    </li>
                    {/*<li className="ingredients__content-item">*/}
                    {/*    <h3 className="ingredients__content-title text_type_main-medium mb-6">Соусы</h3>*/}
                    {/*    <div className={BurgerIngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>*/}
                    {/*        {sauce.map(item => {*/}
                    {/*            const count = Math.random() > 0.5 ? 1 : 0;*/}
                    {/*            return <Ingredient key={item._id} data={item} count={count} onClick={handleClickIngredients} onClose={handleCloseModal}/>*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    {/*<li className="ingredients__content-item">*/}
                    {/*    <h3 className="ingredients__content-title text_type_main-medium mb-6">Начинка</h3>*/}
                    {/*    <div className={BurgerIngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>*/}
                    {/*        {main.map(item => {*/}
                    {/*            const count = Math.random() > 0.5 ? 1 : 0;*/}
                    {/*            return <Ingredient key={item._id} data={item} count={count} onClick={handleClickIngredients} onClose={handleCloseModal}/>*/}
                    {/*        })}*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <div style={{overflow: 'hidden'}}>
                {showModal &&
                <Modal header={"Детали ингредиента"} onClose={handleCloseModal}><IngredientDetails data={dataForModal}/></Modal>}
            </div>
        </section>

    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image_mobile: PropTypes.string,
        type: PropTypes.oneOf(['sauce', 'main', 'bun']),
    }))
};
export default BurgerIngredients;