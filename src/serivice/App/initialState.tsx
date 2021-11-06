import {IAppReducer} from "../interfaces/IReducers";

export const InitialState:IAppReducer = {
    ingredients: {
        loadingIngredient: false,
        hasErrorLoadIngredient: false,
        items: []
    },
};
