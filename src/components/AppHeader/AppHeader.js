import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={HeaderStyles.header + " pt-4 pb-4"}>
            <div className="container">
                <div className={HeaderStyles.header__container}>
                    <nav>
                        <ul className={HeaderStyles.header__nav_list}>
                            <li className="mr-2">
                                <a href="/" className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5 " + HeaderStyles.active }>
                                    <BurgerIcon type={"primary"}/>
                                    <span className="header__nav-name ml-2">Конструктор</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5"}>
                                    <ListIcon type={"secondary"}/>
                                    <span className="ml-2">Лента заказов</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="/">
                        <Logo/>
                    </a>
                    <nav>
                        <ul className={HeaderStyles.header__nav_list}>
                            <li>
                                <a href="/" className={HeaderStyles.header__nav_link + " pt-4 pb-4 pl-5 pr-5"}>
                                    <ProfileIcon type={"secondary"}/>
                                    <span className="ml-2">Личный кабинет</span>
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