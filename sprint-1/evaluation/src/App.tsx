import axios from 'axios'
import React,{useState} from 'react'
import Countries from './Pages/Countries'
import LoginForm from './Pages/LoginForm'

export type User={
  email:string,
  password:string
}
function App() {
  //have a local state management to store the user authenticated status
 const [auth,setAuth]=useState<boolean>(false)
  //it should email and password, both of type string as parameters
  const handleSubmit = async(user:User) => {
    console.log(user,"users")
    await axios.post('https://reqres.in/api/login',user)
    .then((res)=>{setAuth(!auth)})
  }

  // Render LoginForm page if the user is NOT authenticated, else render Countries page
  // handleSubmit should be passed as a prop to the LoginForm page
  return (
    auth?<Countries/>:<LoginForm handleSubmit={handleSubmit}/>
  )
}

export default App
