import styles from './profile.module.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeUserInfo, logoutUser, USER_CLOSE_ERROR} from "../serivice/User/actions";
import {EditUser} from "../components/EditUser/EditUser";
import {Modal} from "../components/Modal/Modal";
import {Error} from "../components/Error/Error";
import {getUser} from "../serivice/User/selectors";

export const ProfilePage = () => {
    const userState = useSelector(getUser);
    const [state, setState] = useState({name: "", email: "", password: ""});
    const [currentLink, setCurrentLink] = useState("profile");
    const dispatch = useDispatch();
    useEffect(() => {
        if (userState.user.name !== undefined && userState.user.email !== undefined) {
            setState({
                name: userState.user.name,
                email: userState.user.email,
                password: ""
            });
        }
    }, [userState]);
    const handleCancel = event => {
        event.preventDefault();
        setState({
            name: userState.user.name,
            email: userState.user.email,
            password: ""
        });
    };
    const handleChangeLink = data => {
        setCurrentLink(data.name);
        if (data.name === 'exit') {
            setState({name: "", email: "", password: ""});
            dispatch(logoutUser());
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(changeUserInfo(state));
    }
    const handleChange = event => {
        setState({
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }
    const handleCloseModal = () => {
        dispatch({
            type: USER_CLOSE_ERROR
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <div className={currentLink === 'profile' ? styles.menu : styles.menu + " text_color_inactive"}
                             onClick={() => handleChangeLink({name: 'profile'})}>
                            Профиль
                        </div>
                        <div className={currentLink === 'orders' ? styles.menu : styles.menu + " text_color_inactive"}
                             onClick={() => handleChangeLink({name: 'orders'})}>
                            История заказов
                        </div>
                        <div className={currentLink === 'exit' ? styles.menu : styles.menu + " text_color_inactive"}
                             onClick={() => handleChangeLink({name: 'exit'})}>
                            Выход
                        </div>
                        <div className={styles.description + " text_color_inactive"}>
                            В этом разделе вы можете <br/>изменить свои персональные данные
                        </div>
                    </div>
                    <div className={styles.right}>
                        {currentLink === "profile" ?
                            <EditUser name={state.name} password={state.password} email={state.email}
                                      handleSubmit={handleSubmit} handleChange={handleChange}
                                      handleCancel={handleCancel}/>
                            : ""}
                    </div>
                </div>
            </div>
            {userState.errorMessage !== "" &&
            <Modal onClose={handleCloseModal}><Error message={userState.errorMessage}/> </Modal>}
        </div>
    );
}