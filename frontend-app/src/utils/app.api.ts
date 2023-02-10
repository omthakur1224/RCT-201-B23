import axios,{AxiosResponse} from "axios"
import { Product, LoginData } from "./types";

export const getApi=async()=>{
    try{
        let response: AxiosResponse <Product[]> =await axios.get("http://localhost:8080/products")
        return response.data;
    }
     catch(err){
        console.log('getData error from API',err)
     }
}
export const getAuthApi=async(creds:LoginData)=>{
    try{
        let response: AxiosResponse <{token:string}> =await axios.post("https://reqres.in/api/login",creds)
        console.log(response.data.token,"token printing from api")
        return response.data.token
    }
     catch(err){
        console.log('postuser error from API',err)
     }
}
