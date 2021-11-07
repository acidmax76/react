export interface IResponseBody<Data> {
    accessToken?:string,
    refreshToken?:string,
    success:boolean,
    name?:string,
    message?:string
    data?:Data,
    user?:Data,
    order?:Data
}