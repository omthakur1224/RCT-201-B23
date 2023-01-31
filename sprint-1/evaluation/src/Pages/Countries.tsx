import React,{useEffect,useState} from 'react'
import { addCountryDetailsAPI, getCountriesAPI } from '../api'
import CountryInput from './CountryInput'
import CountryList from './CountryList'

export interface Country{
  id?:number,
  name:string,
  capital:string
}

// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  const [data,setData]=useState<Country[]>([])
  // have a local state management to store the countries data
  //should accept the country to be added, as a parameter
  const addCountryDetails = (country:Country) => {
    addCountryDetailsAPI(country);
    getCountriesAPI().then((res)=>{
      setData(res)
    })
  }

 useEffect(() => {
  getCountriesAPI().then((res)=>setData(res))
 }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countries</h1>
      <CountryInput addCountryDetails={addCountryDetails}/>
      <CountryList data={data} />
      {/* Render CountryInput component, with addCountryDetails function as props */}

      {/* Render CountryList component, with the countries data as props */}
    </div>
  )
}

export default Countries
