import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from './AppHeader.css';

function AppHeader() {
    return (
        <header className="header pt-4 pb-4">
            <div className="container">
                <div className="header__container">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item mr-2">
                                <a href="#0" className="header__nav-link pt-4 pb-4 pl-5 pr-5 active">
                                    <BurgerIcon type={"primary"}/>
                                    <span className="header__nav-name ml-2">Конструктор</span>
                                </a>
                            </li>
                            <li className="header__nav-item">
                                <a href="#0" className="header__nav-link pt-4 pb-4 pl-5 pr-5">
                                    <ListIcon type={"secondary"}/>
                                    <span className="header__nav-name ml-2">Лента заказов</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a className="header__logo" href="#">
                        <Logo/>
                    </a>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="#0" className="header__nav-link pt-4 pb-4 pl-5 pr-5">
                                    <ProfileIcon type={"secondary"}/>
                                    <span className="header__nav-name ml-2">Личный кабинет</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;