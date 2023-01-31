import React,{useState} from 'react'
import { User } from '../App';

type LoginFormProps={
  handleSubmit:(obj:User)=>void
}
// should receive the handleSubmit callback function through props
const LoginForm = (props:LoginFormProps) => {
  // create a form, to take the user email, and password
 const [user,setUser]=useState({"email":"","password":""});

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
     const {id,value}=e.target;
     console.log(id,value);
     setUser({  
      ...user,
      [id]:value
    })
  }

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {id,value}=e.target;
    console.log(id,value);
    setUser({  
     ...user,
     [id]:value
   })}

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = (e:React.FormEvent<HTMLFormElement>) :void=> {
    e.preventDefault();
    props.handleSubmit(user)
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <form onSubmit={handleClick}>
        <input type="email" placeholder='email' id='email' onChange={handleEmailChange} />
        <input type="password" placeholder='password' id='password'onChange={handlePasswordChange}/>
        <input type="submit" value='login' />
      </form>
    </div>
  )
}

export default LoginForm
