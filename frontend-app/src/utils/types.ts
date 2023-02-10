
export interface Product{
    "id":number,
    "title":string,
    "description":string,
    "price":number,
    "category":string,
    "image":string,
    "rating":{
        "count":number,
        "rate":number
    }
}
// export interface Cart{
// id:number,
// quantity:number,
// productId:number,
// title:string,
// image:string;
// }

export interface Order{
    id:number,
    quantity:number,
    productId:number,
}
export interface Cart extends Order{
    title:string,
    image:string;
}
export interface LoginData{
    email:string,
    password:string
}