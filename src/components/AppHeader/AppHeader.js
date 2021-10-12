import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from './AppHeader.module.css';
import AppStyles from '../App/App.module.css';
import {Link,useRouteMatch} from "react-router-dom";

export const AppHeader=()=> {
    const isConstructor = useRouteMatch({ path: '/', exact: true});
    const isOrders = useRouteMatch('/orders');
    const isProfile = useRouteMatch('/profile');


    return (
        <header className={HeaderStyles.header + " pt-4 pb-4"}>
            <div className={AppStyles.container}>
                <div className={HeaderStyles.header__container}>
                    <nav>
                        <ul className={HeaderStyles.header__nav_list}>
                            <li>
                                <Link to={"/"}  className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5 "} >
                                    <BurgerIcon type={isConstructor  ? "primary" : "secondary"}/>
                                    <span className={isConstructor  ? HeaderStyles.active + " ml-2" : "ml-2"}>Конструктор</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/orders"}  className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5"}>
                                    <ListIcon type={isOrders ? "primary" : "secondary"}/>
                                    <span className={isOrders  ? HeaderStyles.active + " ml-2" : "ml-2"}>Лента заказов</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <a href="/">
                        <Logo/>
                    </a>
                    <nav>
                        <ul className={HeaderStyles.header__nav_list}>
                            <li>
                                <Link to={"/profile"} className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5"} >
                                    <ProfileIcon type={isProfile ? "primary" : "secondary"}/>
                                    <span className={isProfile ? HeaderStyles.active + " ml-2" : "ml-2"}>Личный кабинет</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
