import {createSelector} from "reselect";

const getBun = (store) => store.BurgerConstructorReducer.constructor.bun;
const getItems = (store) => store.BurgerConstructorReducer.constructor.items;

export const getConstructorItems = createSelector(getBun,getItems,(bun,items) => ({ bun , items}));

export const getCost = createSelector(getBun,getItems,(bun,items)=>{
    const costBan = bun ? bun.price * 2 : 0;
    const costIngredients = items.reduce((total, value) => total + value.price, 0);
    return costBan + costIngredients;
});

export const getCounters = createSelector(getConstructorItems,({bun,items})=>{

});