import {createSelector, Selector} from "reselect";
import {name} from "./actions";
import {IStore} from "../interfaces/IStore";
import {IUserState} from "../interfaces/IUser";

const user:Selector<IStore, IUserState> = store => store[name];
export const getUser = createSelector(user, u => u);