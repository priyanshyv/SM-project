import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLogin,children}) => {
    
    if(isLogin){
        return children;
    }
    else{
        return <Navigate to="/form"/>
    }
}

export default PrivateRoute
