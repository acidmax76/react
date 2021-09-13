import React from 'react';
import {CurrencyIcon, Tab, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyle from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';

function BurgerIngredients(props) {
    const [currentTab, setCurrentTab] = React.useState("buns");
    let buns = props.data.filter(element=>element.type === "bun");
    let sauce = props.data.filter(element=>element.type === "sauce");
    let main = props.data.filter(element=>element.type === "main");
    let count=()=>{
        if (Math.random() >= 0.5){
            return (<Counter count={1}/>);
        }
    }
    return (
        <section className={IngredientStyle.ingredients + " pt-10 pb-10"}>
            <h2 className="ingredients__title text_type_main-large mb-5"> Соберите бургер</h2>
            <nav className="ingredients__nav mb-10">
                <ul className={IngredientStyle.ingredients__nav_list}>
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
            <div className={IngredientStyle.ingredients__content + " custom-scroll"}>
                <ul className="ingredients__content-list">
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Булки</h3>
                        <div className={IngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                            {buns.map(item => {
                                return (
                                    <div key={item._id} className={IngredientStyle.ingredients__card}>
                                        <a className="ingredients__card-link" href="/">
                                            <img className={IngredientStyle.ingredients__card_image} src={item.image}
                                                 alt="картинка товара"/>
                                            {count()}
                                            <p className={IngredientStyle.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{item.price}</span>
                                                <CurrencyIcon type={"primary"}/>
                                            </p>
                                            <p className={IngredientStyle.ingredients__card_name + " pb-6"}>{item.name}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Соусы</h3>
                        <div className={IngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                            {sauce.map(item => {
                                return (
                                    <div key={item._id} className={IngredientStyle.ingredients__card}>
                                        <a className="ingredients__card-link" href="/">
                                            <img className={IngredientStyle.ingredients__card_image} src={item.image}
                                                 alt="картинка товара"/>
                                            {count()}
                                            <p className={IngredientStyle.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{item.price}</span>
                                                <CurrencyIcon type={"primary"}/>
                                            </p>
                                            <p className={IngredientStyle.ingredients__card_name + " pb-6"}>{item.name}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                    <li className="ingredients__content-item">
                        <h3 className="ingredients__content-title text_type_main-medium mb-6">Начинка</h3>
                        <div className={IngredientStyle.ingredients__content_cards + " mt-6 mb-10 ml-4 mr-4"}>
                            {main.map(item => {
                                return (
                                    <div key={item._id} className={IngredientStyle.ingredients__card}>
                                        <a className="ingredients__card-link" href="/">
                                            <img className={IngredientStyle.ingredients__card_image} src={item.image}
                                                 alt="картинка товара"/>
                                            {count()}
                                            <p className={IngredientStyle.ingredients__card_price + " mt-1 mb-1"}>
                                                <span
                                                    className="ingredients__card-price-value text_type_digits-default mr-2">{item.price}</span>
                                                <CurrencyIcon type={"primary"}/>
                                            </p>
                                            <p className={IngredientStyle.ingredients__card_name + " pb-6"}>{item.name}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

BurgerIngredients.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image:PropTypes.string,
    type:PropTypes.oneOf(['sauce','main','buns']),
};
export default BurgerIngredients;