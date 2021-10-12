import styles from './register.module.css';
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect} from "react-router-dom";
import React, {useState} from "react";
import {registerUser, USER_CLOSE_ERROR} from "../serivice/User/actions";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../serivice/User/selectors";
import Modal from "../components/Modal/Modal";
import {Error} from "../components/Error/Error";

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({name: "", email: "", password: ""});
    const [isNameInputEmpty, setIsNameInputEmpty] = useState(false);
    const userState = useSelector(getUser);
    const handleSubmit = event => {
        event.preventDefault();
        state.name === "" ? setIsNameInputEmpty(true) : setIsNameInputEmpty(false);
        dispatch(registerUser(state));
    };
    const handleChange = event => {
        setState({
                ...state,
                [event.target.name]: event.target.value
            }
        )
        if (event.target.name === "name") {
            event.target.value === "" ? setIsNameInputEmpty(true) : setIsNameInputEmpty(false);
        }
    }
    const handleCloseModal = () => {
        dispatch({
            type:USER_CLOSE_ERROR
        });
    }
    return (
        localStorage.getItem("refreshToken") === null && !userState.isAuth ?
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.login}>
                        <div className={styles.header}>Регистрация</div>
                        <div className={styles.body}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={"mt-6"}>
                                    <Input placeholder={"Имя"} type={"text"} name={"name"} value={state.name}
                                           errorText={"Имя не может быть пустым"} error={isNameInputEmpty}
                                           onChange={handleChange}/>
                                </div>
                                <div className={"mt-6"}>
                                    <EmailInput name={"email"} value={state.email} onChange={handleChange}/>
                                </div>
                                <div className={"mt-6"}>
                                    <PasswordInput name={"password"} value={state.password} onChange={handleChange}/>
                                </div>
                            </form>
                            <div className={"mt-6"}>
                                <Button type={"primary"} size={"medium"}
                                        onClick={handleSubmit}>Зарегестрироваться</Button>
                            </div>
                        </div>
                        <div className={styles.footer + " mt-20"}>
                            <div className={"text text_type_main-default text_color_inactive"}>
                                Уже зарегестрированы ? <Link to='/login' className={styles.link}>Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {userState.errorMessage !== "" &&
                <Modal onClose={handleCloseModal}><Error message={userState.errorMessage} /> </Modal>}
            </div>
            : <Redirect to={"/login"}/>
    );
}