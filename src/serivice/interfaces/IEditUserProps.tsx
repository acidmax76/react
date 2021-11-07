import React, {ChangeEvent, FormEvent, SyntheticEvent} from "react";

export interface IEditUserProps {
    name: string,
    email: string,
    password: string
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
//    handleCancel: (event: FormEvent<HTMLFormElement>) => void,
    handleCancel: (event: SyntheticEvent<Element,Event>) => void,
}