export interface IUser {
    email:string,
    name:string

}

export interface IUserState  {
    user: IUser | {}
    isAuth:boolean,
    errorMessage:string,
    resetPassword:boolean
}