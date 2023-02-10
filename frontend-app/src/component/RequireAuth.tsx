import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../Redux/store';

const RequireAuth = ({children}:{children: JSX.Element}) => {

    const isAuth=useAppSelector(store=>store.authReducer.isAuth);

    const location=useLocation();
    console.log(location,'from require auth')

    if(!isAuth){
        return (<Navigate to='/login' replace state={{path:location.pathname}}/>)
    }
    return children
   
}

export default RequireAuth