import React from 'react'
import { Country } from './Countries'

interface CountryListProps{
  data:Country[]
}
// should receive the countries list data, through the props, to be mapped and rendered
const CountryList = ({data}:CountryListProps) => {
  return <div>
    CountryList
   {data.map((item,index)=>
        <h3 key={index}>{item.name}-{item.capital}</h3>
   )}
  </div>
}

export default CountryList
