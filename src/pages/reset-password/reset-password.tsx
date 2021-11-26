import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import React, {useState} from "react";
import {useDispatch,useSelector} from "../../serivice/types";
import {getUser} from "../../serivice/User/selectors";
import {newPassword, USER_CLOSE_ERROR} from "../../serivice/User/actions";
import {Modal} from "../../components/Modal/Modal";
import {Error} from "../../components/Error/Error";
import {Redirect} from "react-router-dom";

export const ResetPassword = () => {
    const [state, setState] = useState({password: "", token: ""});
    const dispatch = useDispatch();
    const userState = useSelector(getUser);
    const handleCloseModal = () => {
        dispatch({
            type: USER_CLOSE_ERROR
        });
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(newPassword(state));
    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setState({
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }
    return (
        userState.resetPassword && !userState.isAuth ?
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.login}>
                    <div className={styles.header}>Восстановление пароля</div>
                    <div className={styles.body}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={"mt-6"}>
                                <Input name={"password"} value={state.password} placeholder={"Введите новый пароль"} type={"password"} icon={"ShowIcon"} onChange={handleChange}/>
                            </div>
                            <div className={"mt-6"}>
                                <Input name={"token"} value={state.token} placeholder={"Введите код из письма"} type={"text"} onChange={handleChange}/>
                            </div>
                            <div className={"mt-6"}>
                                <Button type={"primary"} size={"medium"}>Сохранить</Button>
                            </div>
                        </form>

                    </div>
                    <div className={styles.footer + " mt-20"}>
                        <div className={"text text_type_main-default text_color_inactive"}>
                            Вспомнили пароль ? Войти
                        </div>
                    </div>
                </div>
            </div>
            {userState.errorMessage !== "" &&
            <Modal onClose={handleCloseModal}><Error message={userState.errorMessage}/> </Modal>}
        </div>
            : <Redirect to={"/forgot-password"} />
    );
}