import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from './AppHeader.css';

function AppHeader() {
    return (
        <header className="top-header">
            <div className="wrapper">
                <nav className="nav-left">
                    <ul>
                        <li>
                            <a href="#" className="mt-4 mb-4 ml-5 active"><BurgerIcon type={"primary"}/><p className="ml-2">Конструктор</p></a>
                        </li>
                        <li>
                            <a href="#" className="mt-4 mb-4 ml-5"><ListIcon type={"primary"} /><p className="ml-2">Лента заказов</p></a>
                        </li>
                    </ul>
                </nav>
                <a href="#"><Logo/></a>
                <nav className="nav-right">
                    <ul>
                        <li>
                            <a href="#" className="mt-4 mb-4 ml-5"><ProfileIcon type={"primary"}/><p className="ml-2">Личный кабинет</p></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;