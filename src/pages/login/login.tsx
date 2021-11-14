import styles from './login.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useLocation} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, USER_CLOSE_ERROR} from "../../serivice/User/actions";
import {getUser} from "../../serivice/User/selectors";
import {Modal} from "../../components/Modal/Modal";
import {Error} from "../../components/Error/Error";
import {ILocationState} from "../../serivice/interfaces/ILocationState";


export const LoginPage = () => {
    const location = useLocation<ILocationState>();
    const userState = useSelector(getUser);
    const [state, setState] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(loginUser(state));
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (userState.isAuth) {
        return (
            <Redirect to={ location.state?.from || '/' }/>
        );
    }

    return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.login}>

                        <div className={styles.header}>Вход</div>
                        <div className={styles.body}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={"mt-6"}>
                                    <EmailInput name={"email"} value={state.email} onChange={handleChange}/>
                                </div>
                                <div className={"mt-6"}>
                                    <PasswordInput name={"password"} value={state.password} onChange={handleChange}/>
                                </div>
                                <div className={"mt-6"}>
                                    <Button type={"primary"} size={"medium"}>Войти</Button>
                                </div>
                            </form>

                        </div>
                        <div className={styles.footer + " mt-20"}>
                            <div className={"text text_type_main-default text_color_inactive"}>
                                Вы новый пользователь ? <Link to='/register'
                                                              className={styles.link}>Зарегистрироваться</Link>
                            </div>
                            <div className={"mt-4 text text_type_main-default text_color_inactive"}>
                                Забыли пароль ? <Link to='/forgot-password' className={styles.link}>Восстановить
                                пароль</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {userState.errorMessage &&
                <Modal header="Ошибка" onClose={handleCloseModal}><Error message={userState.errorMessage}/> </Modal>}
            </div>
    );
}