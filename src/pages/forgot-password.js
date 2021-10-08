import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';

export const ForgotPassword =() => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.login}>
                    <div className={styles.header}>Восстановление пароля</div>
                    <div className={styles.body}>
                        <div className={"mt-6"}>
                            <Input placeholder={"Укажите e-mail "} type={"email"}/>
                        </div>
                        <div className={"mt-6"}>
                            <Button type={"primary"} size={"medium"}>Восстановить</Button>
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