import React,{useState} from 'react'
import { getCountriesAPI } from '../api';
import { Country } from './Countries'

interface CountryInputProps{
  addCountryDetails:(country:Country)=>void;
}
// should receive the addCountryDetails callback function through props
const CountryInput = ({addCountryDetails}:CountryInputProps) => {
  // create a form, to take the country, and capital
  const [country,setCountry]=useState<Country>({name:"",capital:""});
  const handleCountryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {id,value}=e.target;
    console.log(id,value);
    setCountry({  
     ...country,
     [id]:value
   })
 }
  const handleCapitalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {id,value}=e.target;
    console.log(id,value);
    setCountry({  
     ...country,
     [id]:value
   })
 }
  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) :void=> {
    e.preventDefault();
    addCountryDetails(country);
    // getCountriesAPI().then()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='country-name' id='country-name' onChange={handleCountryChange} />
        <input type="text" placeholder='capital' id='capital'onChange={handleCapitalChange}/>
        <input type="submit" value='Add Country' />
      </form>
    </div>
  )
}

export default CountryInput
