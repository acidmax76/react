import React, {useMemo, useState, useRef, useCallback} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {TabIngredients} from '../TabIngredients/TabIngredients';
import {ADD_INGREDIENT_TO_MODAL, DELETE_INGREDIENT_FROM_MODAL} from "../../serivice/actions/app";
import {useDispatch, useSelector} from "react-redux";



function BurgerIngredients(props) {
    const {items} = useSelector(store => store.AppReducer.ingredients);
    const {constructor} = useSelector(store => store.BurgerConstructorReducer);
    const dispatch = useDispatch();

    const useTopId = () => {
        const listRef = useRef();
        const items = useRef({});
        const [topId, setTopId] = useState('');

        const itemsRef = useCallback((el) => {
            if (el) items.current[el.id] = el;
        }, [items])

        const onScroll = useCallback(() => {
            const listTop = listRef.current.getBoundingClientRect().top;
            let id = '';
            let minDiff = Number.MAX_VALUE;
            for (let item in items.current) {
                const diff = Math.abs(items.current[item].getBoundingClientRect().top - listTop);
                if (diff >= 0 && minDiff > diff) {
                    minDiff = diff;
                    id = items.current[item].id;
                }
            }
            if (id && id !== topId) setTopId(id);
            console.log(topId);
        }, [topId])

        return {listRef, itemsRef, onScroll, topId}
    }

    const [currentTab, setCurrentTab] = useState({
        type: 'buns',
        name: 'Булки',
    });
    const tabs = [
        {
            name: "Булки",
            type: "buns",
            ingredients: items.filter(element => element.type === 'bun')
        },
        {
            name: "Начинки",
            type: "main",
            ingredients: items.filter(element => element.type === 'main')
        },
        {
            name: "Соусы",
            type: "sauce",
            ingredients: items.filter(element => element.type === 'sauce')
        }
    ];
    const [showModal, setShowModal] = useState(false);
    //const [dataForModal, setDataForModal] = useState(null);

    const count = useMemo(() => {
        const ingredients = constructor.items.reduce((prev, curr) => (prev[curr._id] = ++prev[curr._id] || 1, prev), {});
        if (constructor.bun) {
            ingredients[constructor.bun._id] = 2;
        }
        return ingredients;
    }, [constructor]);

    // const handleTabClick = (data) => {
    //     switch (data) {
    //         case 'main':
    //             setCurrentTab({type: 'main', name: 'Начинки'});
    //             break;
    //         case 'sauce':
    //             setCurrentTab({type: 'sauce', name: 'Соусы'});
    //             break;
    //         default:
    //             setCurrentTab({type: 'buns', name: 'Булки'});
    //     }
    // };
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

    return (
        <section className={BurgerIngredientStyle.ingredients + ' pt-10 pb-10'}>
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите
                бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className={BurgerIngredientStyle.ingredients__nav_list}>
                    <Tab value="buns"
                         active={true}
                        //  active={currentTab.type === 'buns'}
                        // onClick={handleTabClick}
                    >
                        Булки
                    </Tab>
                    <Tab value="main"
                         active={false}
                        //  active={currentTab.type === 'main'}
                        // onClick={handleTabClick}
                    >
                        Начинки
                    </Tab>
                    <Tab value="sauce"
                         active={false}
                        //  active={currentTab.type === 'sauce'}
                        // onClick={handleTabClick}
                    >
                        Соусы
                    </Tab>
                </ul>
            </nav>
            <div  className={BurgerIngredientStyle.ingredients__content +
            ' custom-scroll'} >
                <ul className={BurgerIngredientStyle.ingredients__content_list}>
                    {tabs.map((item, index) => {
                            return (
                            <li key={index}>
                                <TabIngredients
                                    key={index} name={item.name} type={item.type}
                                    // currentTab={currentTab}
                                    ingredients={item.ingredients} count={count}
                                    onClick={handleClickIngredients}
                                    // onClose={handleCloseModal}
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
                    <Modal header={'Детали ингредиента'}
                           onClose={handleCloseModal}><IngredientDetails
                    /></Modal>
                }
            </div>
        </section>

    );
}

export default BurgerIngredients;