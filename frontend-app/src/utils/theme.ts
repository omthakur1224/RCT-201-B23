import {extendTheme} from '@chakra-ui/react'

let colors={
   customPrimary:{
    1:"#FFC6D3",
    2:"#FEA1BF",
    3:"#E98EAD",
    4:"#EB455F",
    5:"#BAD7E9",
    6:"#FF8787",
   } 
}
const customTheme= extendTheme({colors});
export default customTheme;