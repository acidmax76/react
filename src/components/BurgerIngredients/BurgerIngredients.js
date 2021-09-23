import React, {useContext, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {BurgerContext} from '../../serivice/BurgerContext';
import {TabIngredients} from '../TabIngredients/TabIngredients';
import {ADD_INGREDIENT_TO_CONSTRUCTOR} from "../../serivice/actions/app";

function BurgerIngredients(props) {
    const {ingredients} = useContext(BurgerContext);
    const [currentTab, setCurrentTab] = useState({
        type: 'buns',
        name: 'Булки',
        items: ingredients.filter(element => element.type === 'bun'),
    });
    const [showModal, setShowModal] = useState(false);
    const [dataForModal, setDataForModal] = useState(null);

    const handleTabClick = (data) => {
        switch (data) {
            case 'main':
                const main = ingredients.filter(element => element.type === 'main');
                setCurrentTab({type: 'main', name: 'Начинки', items: main});
                break;
            case 'sauce':
                const sauce = ingredients.filter(element => element.type === 'sauce');
                setCurrentTab({type: 'sauce', name: 'Соусы', items: sauce});
                break;
            default:
                const buns = ingredients.filter(element => element.type === 'bun');
                setCurrentTab({type: 'buns', name: 'Булки', items: buns});
        }
    };

    const handleClickIngredients = (data) => {
        setShowModal(true);
        setDataForModal(data);
        props.onClickIngredient({
            type:ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload:data,
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className={BurgerIngredientStyle.ingredients + ' pt-10 pb-10'}>
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите
                бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className={BurgerIngredientStyle.ingredients__nav_list}>
                    <Tab value="buns" active={currentTab.type === 'buns'}
                         onClick={handleTabClick}>
                        Булки
                    </Tab>
                    <Tab value="main" active={currentTab.type === 'main'}
                         onClick={handleTabClick}>
                        Начинки
                    </Tab>
                    <Tab value="sauce" active={currentTab.type === 'sauce'}
                         onClick={handleTabClick}>
                        Соусы
                    </Tab>
                </ul>
            </nav>
            <div className={BurgerIngredientStyle.ingredients__content +
            ' custom-scroll'}>
                <ul className="ingredients__content-list">
                    <TabIngredients currentTab={currentTab} items={currentTab.items}
                                    onClick={handleClickIngredients}
                                    onClose={handleCloseModal}/>
                </ul>
            </div>
            <div style={{overflow: 'hidden'}}>
                {showModal &&
                <Modal header={'Детали ингредиента'}
                       onClose={handleCloseModal}><IngredientDetails
                    data={dataForModal}/></Modal>}
            </div>
        </section>

    );
}

export default BurgerIngredients;