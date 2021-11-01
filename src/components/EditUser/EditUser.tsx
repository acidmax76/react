import {Input, Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './EditUser.module.css';
import {FC} from "react";

type TEditUserProps = {
    name:string,
    email:string,
    password:string
    handleChange: ()=>void,
    handleSubmit: ()=>void,
    handleCancel: ()=>void,
}

export const EditUser: FC<TEditUserProps> = ({name, email, password, handleChange, handleSubmit, handleCancel}) => {
    return (
        <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <Input placeholder={"Имя"} name={"name"} value={name} onChange={handleChange}/>
            </div>
            <div className={"mt-6"}>
                <EmailInput name={"email"} value={email} onChange={handleChange}/>
            </div>
            <div className={"mt-6"}>
                <PasswordInput  name={"password"} value={password} onChange={handleChange}/>
            </div>
            <div className={styles.button_row}>
                <Button type={"secondary"} size={"medium"} onClick={handleCancel}>Отменить</Button>
                <Button type={"primary"} size={"medium"}>Сохранить</Button>
            </div>
        </form>

        </div>
    );
}

