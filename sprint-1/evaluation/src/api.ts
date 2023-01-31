import { Country } from "./Pages/Countries";
import axios,{AxiosResponse} from 'axios'
// make a successful login request to the reqres.in API
export const loginAPI = () => {};

// make a request to get the list of countries from the db.json file, using JSON server
export const getCountriesAPI = async()=> {
   
        let response:AxiosResponse<Country[]>=await axios.get('http://localhost:8080/countries')
        return response.data;
   
    // return response;
};

//make a request to add a country to the db.json file, using JSON server
export const addCountryDetailsAPI = async(country:Country) => {
    let response:AxiosResponse<Country[]>=await axios.post('http://localhost:8080/countries',country)
    return response.data;
};
