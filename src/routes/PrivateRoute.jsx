import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProviders';
import {  Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let location =useLocation();
    console.log(location.pathname);
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <h2>Loading...</h2>
    }
    if(user){
    return children
    }

        console.log(children);
    return <Navigate to="/login" state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;