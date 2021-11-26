export interface IClientOrder {
    readonly ingredients:ReadonlyArray<string>,
    readonly _id:string,
    readonly status:string,
    readonly name:string,
    readonly number:number,
    readonly createdAt:string,
    readonly updatedAt:string,
}

export interface IClientOrders {
    readonly success:boolean,
    readonly orders:Array<IClientOrder>,
    readonly total:number,
    readonly totalToday:number
}

// {
//     "success": true,
//         "orders": [
//     {
//         "ingredients": [
//             "60d3463f7034a000269f45e9",
//             "60d3463f7034a000269f45e7"
//         ],
//         "_id": "",
//         "status": "done",
//         "number": 1,
//         "createdAt": "2021-06-23T20:11:01.403Z",
//         "updatedAt": "2021-06-23T20:11:01.406Z"
//     },
//     {
//         "ingredients": [
//             "60d3463f7034a000269f45e9"
//         ],
//         "_id": "",
//         "status": "done",
//         "number": 3,
//         "createdAt": "2021-06-23T20:13:23.654Z",
//         "updatedAt": "2021-06-23T20:13:23.657Z"
//     }
// ],
//         "total": 2,
//         "totalToday": 2
// }