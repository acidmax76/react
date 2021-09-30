import React, {useMemo, useRef, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {TabIngredients} from '../TabIngredients/TabIngredients';
import {ADD_INGREDIENT_TO_MODAL, DELETE_INGREDIENT_FROM_MODAL} from "../../serivice/actions/app";
import {useDispatch, useSelector} from "react-redux";
import {useTopId} from "../../serivice/custom/hooks/useTopId";



function BurgerIngredients(props) {
    const {items} = useSelector(store => store.AppReducer.ingredients);
    const {constructor} = useSelector(store => store.BurgerConstructorReducer);
    const dispatch = useDispatch();
    const tabs = [
        {
            name: "Булки",
            type: "buns",
            ingredients: items.filter(element => element.type === 'bun')
        },

        {
            name: "Соусы",
            type: "sauce",
            ingredients: items.filter(element => element.type === 'sauce')
        },
        {
            name: "Начинки",
            type: "main",
            ingredients: items.filter(element => element.type === 'main')
        },
    ];
    const [showModal, setShowModal] = useState(false);
    const [currentTab,setCurrentTab] = useState('buns')
    const count = useMemo(() => {
        const ingredients = constructor.items.reduce((prev, curr) => (prev[curr._id] = ++prev[curr._id] || 1, prev), {});
        if (constructor.bun) {
            ingredients[constructor.bun._id] = 2;
        }
        return ingredients;
    }, [constructor]);
    const handleClickIngredients = (data) => {
        setShowModal(true);
        dispatch({
            type: ADD_INGREDIENT_TO_MODAL,
            ingredient: data,
        });
    };
    const handleCloseModal = () => {
        setShowModal(false);
        dispatch({
            type: DELETE_INGREDIENT_FROM_MODAL,
        });
    };
    const sauceRef = useRef();
    const bunsRef = useRef();
    const mainRef = useRef();
    const selectedDiv = useRef();

    const  handleTabs = () => {
        const topDivFrame = selectedDiv.current.offsetTop;
        const bunsClientRect = bunsRef.current.getBoundingClientRect().top;
        const sauceClientRect = sauceRef.current.getBoundingClientRect().top;
        const mainClientRect = mainRef.current.getBoundingClientRect().top;
        if (topDivFrame >= bunsClientRect && topDivFrame <= sauceClientRect) {
            setCurrentTab('buns');
        } else if (topDivFrame >= sauceClientRect  && topDivFrame <= mainClientRect) {
            setCurrentTab('sauce');
        } else if (topDivFrame >= mainClientRect) {
            setCurrentTab('main');
        }
    }
    const handleTabClick = (data)=>{
        setCurrentTab(data.name);
        data.ref.current.scrollIntoView();
    }
    return (
        <section className={BurgerIngredientStyle.ingredients + ' pt-10 pb-10'}>
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите
                бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className={BurgerIngredientStyle.ingredients__nav_list}>
                    <Tab value="buns" active={currentTab === 'buns'} onClick={() => handleTabClick({name:"buns",ref:bunsRef})}>
                        Булки
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={() => handleTabClick({name:"main",ref:mainRef})}>
                        Начинки
                    </Tab>
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => handleTabClick({name:"sauce",ref:sauceRef})}>
                        Соусы
                    </Tab>
                </ul>
            </nav>
            <div ref={selectedDiv} className={BurgerIngredientStyle.ingredients__content +
            ' custom-scroll'} onScroll={handleTabs}>
                <ul className={BurgerIngredientStyle.ingredients__content_list}>
                    {tabs.map((item, index) => {
                            return (
                            <li key={index} ref={item.type === 'buns' ? bunsRef : item.type === 'main' ? mainRef : sauceRef} data-tab-id={item.type}>
                                <TabIngredients
                                    key={index} name={item.name} type={item.type}
                                    ingredients={item.ingredients} count={count}
                                    onClick={handleClickIngredients}
                                />
                            </li>
                            )
                        }
                    )}
                </ul>
            </div>
            <div style={{overflow: 'hidden'}}>
                {
                    showModal &&
                    <Modal header={'Детали ингредиента'} onClose={handleCloseModal}>
                        <IngredientDetails />
                    </Modal>
                }
            </div>
        </section>

    );
}

export default BurgerIngredients;