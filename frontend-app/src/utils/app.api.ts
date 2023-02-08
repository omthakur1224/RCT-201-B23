import axios,{AxiosResponse} from "axios"
import { Product } from "./types";

export const GetAPI=async()=>{
    try{
        let response: AxiosResponse <Product[]> =await axios.get("http://localhost:8080/products")
        return response.data;
    }
     catch(err){
        console.log('getData error from API',err)
     }
}