export interface IRequestOptions {
    method:string,
    headers:{
        [x:string]:string
    } | Headers,
    body?:string
}