import {
    LOGIN_USER,
    LOGOUT_USER,
    NEW_PASSWORD_USER,
    REGISTER_USER,
    RESET_USER,
    USER_CLOSE_ERROR,
    USER_ERROR
} from "./actions";
import {IUser} from "../interfaces/IUser";

interface IRegisterUser {
    type: typeof REGISTER_USER
    data: IUser
}

interface ILoginUser {
    type: typeof LOGIN_USER,
    data: IUser
}
interface ILogoutUser {
    type: typeof LOGOUT_USER
}
interface IResetUser {
    type: typeof RESET_USER,
}
interface INewPasswordUser {
    type: typeof NEW_PASSWORD_USER
}
interface IErrorUser {
    type: typeof USER_ERROR
    error:string,
}
interface ICLoseErrorUser {
    type: typeof USER_CLOSE_ERROR
}

export type TUser =
        IRegisterUser |
        ILoginUser |
        ILogoutUser |
        IResetUser |
        INewPasswordUser |
        IErrorUser |
        ICLoseErrorUser ;