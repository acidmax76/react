import {IIngredient} from "./IIngredient";

export interface IOrderData {
    createdAt:string,
    ingredients:IIngredient[],
    name:string,
    number:number,
    owner: {
        createdAt:string,
        email:string,
        name:string,
        updatedAt:string
    },
    price:number,
    status:string,
    updatedAt:string,
    _id:string
}

export interface IOrder {
    name:string,
    number:number
}