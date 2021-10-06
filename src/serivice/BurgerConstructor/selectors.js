import {createSelector} from "reselect";
import {name} from "./actions";

const getBun = (store) => store[name].constructor.bun;
const getItems = (store) => store[name].constructor.items;


export const getConstructorItems = createSelector(getBun, getItems, (bun, items) => ({bun, items}));

export const getCost = createSelector(getConstructorItems, ({bun, items}) => {
    const costBan = bun ? bun.price * 2 : 0;
    const costIngredients = items.reduce((total, value) => total + value.price, 0);
    return costBan + costIngredients;
});

export const getCounters = createSelector(getConstructorItems,
    ({bun, items}) => {
        // eslint-disable-next-line
        const ingredients = items.reduce((prev, curr) => (prev[curr._id] = ++prev[curr._id] || 1, prev), {});
        if (bun) {
            ingredients[bun._id] = 2;
        }
        return ingredients;
    }
);