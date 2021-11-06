
export interface IObjectKeys {
    [key: string]: string | number ;
}

export interface IIngredient extends IObjectKeys{
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    proteins: number,
    __v: number,
    _id: string,
    name: string,
    price: number,
    image_mobile: string,
    type: 'sauce' | 'main' | 'bun',
    key:string
}