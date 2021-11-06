
export interface IUserState  {
    user: {
        email:string,
        name:string
    },
    isAuth:boolean,
    errorMessage:string,
    resetPassword:boolean
}