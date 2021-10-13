import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './EditUser.module.css';
import PropTypes from "prop-types";

export const EditUser = ({name, email, password, handleChange, handleSubmit, handleCancel}) => {
    return (
        <div className={styles.main}>
        <form className={styles.form}>
            <div>
                <Input placeholder={"Имя"} name={"name"} value={name} onChange={handleChange}/>
            </div>
            <div className={"mt-6"}>
                <EmailInput placeholder={"E-Mail"} name={"email"} value={email} onChange={handleChange}
                            icon={"EditIcon"}/>
            </div>
            <div className={"mt-6"}>
                <PasswordInput placeholder={"Пароль"} name={"password"} value={password} onChange={handleChange}
                               icon={"EditIcon"}/>
            </div>
        </form>
            <div className={styles.button_row}>
                <Button className={"mr-10"} type={"secondary"} size={"medium"}
                        onClick={handleCancel}>Отменить</Button>
                <Button type={"primary"} size={"medium"} onClick={handleSubmit}>Сохранить</Button>
            </div>
        </div>
    );
}

EditUser.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
};