import {ILocationState} from "./ILocationState";
import {History, Location} from "history";

export interface IModalPage {
    location:Location<ILocationState>,
    history:History
}