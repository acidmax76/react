import styles from './login.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.login}>
                    <div className={styles.header}> Вход</div>
                    <div className={styles.body}>
                        <div className={"mt-6"}>
                            <EmailInput  name={"Email"}/>
                        </div>
                        <div className={"mt-6"}>
                            <PasswordInput  name={"Password"}/>
                        </div>
                        <div className={"mt-6"}>
                            <Button type={"primary"} size={"medium"}>Войти</Button>
                        </div>
                    </div>
                    <div className={styles.footer + " mt-20"}>
                        <div className={"text text_type_main-default text_color_inactive"}>
                            Вы новый пользователь ? Зарегистрироваться
                        </div>
                        <div className={"mt-4 text text_type_main-default text_color_inactive"}>
                            Забыли пароль ? Восстановить пароль
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}