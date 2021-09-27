import React, {useContext, useMemo, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {BurgerContext} from '../../serivice/BurgerContext';
import {TabIngredients} from '../TabIngredients/TabIngredients';
import {ADD_INGREDIENT_TO_CONSTRUCTOR} from "../../serivice/actions/app";

function BurgerIngredients(props) {
    const {ingredients, constructor} = useContext(BurgerContext);
    const [currentTab, setCurrentTab] = useState({
        type: 'buns',
        name: 'Булки',
    });
    const items = [
        {
            name: "Булки",
            type: "buns",
            ingredients: ingredients.filter(element => element.type === 'bun')
        },
        {
            name: "Начинки",
            type: "main",
            ingredients: ingredients.filter(element => element.type === 'main')
        },
        {
            name: "Соусы",
            type: "sauce",
            ingredients: ingredients.filter(element => element.type === 'sauce')
        }
    ];
    const [showModal, setShowModal] = useState(false);
    const [dataForModal, setDataForModal] = useState(null);

    const count = useMemo(() => {
        const ingredients = constructor.ingredients.reduce((prev, curr) => (prev[curr._id] = ++prev[curr._id] || 1, prev), {});
        if (constructor.bun) {
            ingredients[constructor.bun._id] = 2;
        }
        return ingredients;
    }, [constructor]);

    const handleTabClick = (data) => {
        switch (data) {
            case 'main':
                setCurrentTab({type: 'main', name: 'Начинки'});
                break;
            case 'sauce':
                setCurrentTab({type: 'sauce', name: 'Соусы'});
                break;
            default:
                setCurrentTab({type: 'buns', name: 'Булки'});
        }
    };
    const handleClickIngredients = (data) => {
        setShowModal(true);
        setDataForModal(data);
        props.onClickIngredient({
            type: ADD_INGREDIENT_TO_CONSTRUCTOR,
            payload: data,
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
                <ul className={BurgerIngredientStyle.ingredients__content_list}>
                    {items.map((item,index) => {
                            return <TabIngredients key={index} name={item.name} type={item.type} currentTab={currentTab} ingredients={item.ingredients} count={count}
                                                   onClick={handleClickIngredients}
                                                   onClose={handleCloseModal}/>
                        }
                    )}
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