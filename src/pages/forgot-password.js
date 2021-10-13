import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';
import {Link, Redirect} from "react-router-dom";
import {Modal} from "../components/Modal/Modal";
import {Error} from "../components/Error/Error";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../serivice/User/selectors";
import {resetPassword, USER_CLOSE_ERROR} from "../serivice/User/actions";

export const ForgotPassword = () => {
    const [state, setState] = useState({email: ""});
    const dispatch = useDispatch();
    const userState = useSelector(getUser);
    const handleCloseModal = () => {
        dispatch({
            type: USER_CLOSE_ERROR
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(resetPassword(state));
    }
    const handleChange = event => {
        setState({
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }
    return (
        !userState.resetPassword  ?
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.login}>
                        <div className={styles.header}>Восстановление пароля</div>
                        <div className={styles.body}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={"mt-6"}>
                                    <Input placeholder={"Укажите e-mail "} type={"email"} value={state.email} name={"email"}
                                           onChange={handleChange}/>
                                </div>
                            </form>
                            <div className={"mt-6"}>
                                <Button type={"primary"} size={"medium"}
                                        onClick={handleSubmit}>Восстановить</Button>
                            </div>
                        </div>
                        <div className={styles.footer + " mt-20"}>
                            <div className={"text text_type_main-default text_color_inactive"}>
                                Вспомнили пароль ? <Link to='/login' className={styles.link}>Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {userState.errorMessage !== "" &&
                <Modal onClose={handleCloseModal}><Error message={userState.errorMessage}/> </Modal>}
            </div>
            : <Redirect to={"/reset-password"}/>
    );
}