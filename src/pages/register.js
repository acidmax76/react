import styles from './register.module.css';
import {Input, EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const RegisterPage = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.login}>
                    <div className={styles.header}>Регистрация</div>
                    <div className={styles.body}>
                        <div className={"mt-6"}>
                            <Input placeholder={"Имя"} type={"text"}/>
                        </div>
                        <div className={"mt-6"}>
                            <EmailInput  name={"Email"}/>
                        </div>
                        <div className={"mt-6"}>
                            <PasswordInput  name={"Password"}/>
                        </div>
                        <div className={"mt-6"}>
                            <Button type={"primary"} size={"medium"}>Зарегестрироваться</Button>
                        </div>
                    </div>
                    <div className={styles.footer + " mt-20"}>
                        <div className={"text text_type_main-default text_color_inactive"}>
                            Уже зарегестрированы ?  Войти 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}