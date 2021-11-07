import {IIngredient} from "./IIngredient";

export interface IConstructorIngredientProps {
    index: number,
    item: IIngredient,
    moveCard: (dragIndex: number, hoverIndex: number) => void,
    deleteCard: () => void
}