import {
    ADD_INGREDIENT_TO_CONSTRUCTOR,
    DELETE_ALL_FROM_CONSTRUCTOR,
    DELETE_INGREDIENT_FROM_CONSTRUCTOR, MOVE_CARD
} from "./actions";
import {IIngredient} from "../interfaces/IIngredient";

 interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR;
    item: IIngredient
}

 interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR;
    payload:number;
}

 interface IDeleteAll {
    readonly type: typeof DELETE_ALL_FROM_CONSTRUCTOR;
}

 interface IMoveCard {
    readonly type: typeof MOVE_CARD;
    item: {
        dragIndex: number,
        hoverIndex: number,
        dragCard: IIngredient
    }
}

export type TConstructor =
        IAddIngredient |
        IDeleteIngredient |
        IDeleteAll |
        IMoveCard;