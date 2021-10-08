import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';

export const ResetPassword =()=>{
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.login}>
                    <div className={styles.header}>Восстановление пароля</div>
                    <div className={styles.body}>
                        <div className={"mt-6"}>
                            <Input placeholder={"Введите новый пароль"} type={"password"} icon={"ShowIcon"}/>
                        </div>
                        <div className={"mt-6"}>
                            <Input placeholder={"Введите код из письма"} type={"text"}/>
                        </div>
                        <div className={"mt-6"}>
                            <Button type={"primary"} size={"medium"}>Сохранить</Button>
                        </div>
                    </div>
                    <div className={styles.footer + " mt-20"}>
                        <div className={"text text_type_main-default text_color_inactive"}>
                            Вспомнили пароль ?  Войти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}