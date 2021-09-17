import React, {useState, useEffect} from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function App() {
    const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
    const [showModal,setShowModal] = useState(false);
    const [state, setState] = useState({
        Data: null,
        loading: true,
    })
    const [reloadApi, setReloadApi] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setState({...state, loading: true});
                const res = await fetch(API_URL);
                const data = await res.json();
                setState({...state, Data: data.data, loading: false});
            } catch (e) {
                console.log(e.message);
            }
        }
        getData();

    }, [reloadApi]);


    return (

        <>
            <AppHeader/>
            <main className={AppStyles.main}>
                <ul className={AppStyles.container + ' ' + AppStyles.content}>
                    <li className={AppStyles.content__block + " mr-10"}>
                        {!state.loading &&
                        <BurgerIngredients data={state.Data} />
                        }
                    </li>
                    <li className="{AppStyles.content__block}">
                        {
                            !state.loading &&
                            <BurgerConstructor data={state.Data}/>
                        }
                    </li>
                </ul>
                <div style={{overflow: 'hidden'}}>
                    { showModal &&
                        <Modal title={"пример заголовка"}/>
                    }
                </div>
            </main>
        </>
    );
}

export default App;
