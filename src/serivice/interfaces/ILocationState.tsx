import {Location} from "history";

export interface ILocationState {
    type?: string;
    modal?:Location
    from?:Location
    // pathname: string;
    // state: Data;
    // search: string;
    // hash: string;
    // key: string;
}