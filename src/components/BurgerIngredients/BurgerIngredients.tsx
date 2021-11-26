import React, { useRef, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientStyle from './BurgerIngredients.module.css';
import {TabIngredients} from '../TabIngredients/TabIngredients';
import {useSelector} from "../../serivice/types";
import {getCounters} from "../../serivice/BurgerConstructor/selectors";
import {getItems} from "../../serivice/BurgerIngredients/selectors";
import {useLocation} from "react-router-dom";
import {LocationState} from "history";
import {ITabClick} from "../../serivice/interfaces/ITabClick";


export const BurgerIngredients =()=> {
    const location:LocationState = useLocation();
    const items = useSelector(getItems) || [];
    const count = useSelector(getCounters)
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
    const [currentTab,setCurrentTab] = useState('buns')
    const sauceRef = useRef<HTMLLIElement>(null);
    const bunsRef = useRef<HTMLLIElement>(null);
    const mainRef = useRef<HTMLLIElement>(null);
    const selectedDiv = useRef<HTMLDivElement>(null);
    const  handleTabs = () => {
        if (selectedDiv.current === null ) return;
        if (bunsRef.current === null ) return;
        if (sauceRef.current === null ) return;
        if (mainRef.current === null ) return;
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
    const handleTabClick = (data:ITabClick)=>{
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
                    <Tab value="sauce" active={currentTab === 'sauce'} onClick={() => handleTabClick({name:"sauce",ref:sauceRef})}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={currentTab === 'main'} onClick={() => handleTabClick({name:"main",ref:mainRef})}>
                        Начинки
                    </Tab>
                </ul>
            </nav>
            <div ref={selectedDiv} className={BurgerIngredientStyle.ingredients__content +
            ' custom-scroll'} onScroll={handleTabs}>
                <ul className={BurgerIngredientStyle.ingredients__content_list}>
                    {tabs.map((item, index) => {
                            return (
                            <li key={index} ref={item.type === 'buns' ? bunsRef : item.type === 'main' ? mainRef : sauceRef} data-tab-id={item.type}>
                                <TabIngredients key={index} name={item.name} ingredients={item.ingredients} count={count} location={location}
                                />
                            </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </section>

    );
}
