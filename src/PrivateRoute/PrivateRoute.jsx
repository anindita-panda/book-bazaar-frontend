import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    if(loading){
        return (
            <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>
        )
    }

    if(user){
        return children;
    }

    return (
        <Navigate to = "/login" state = {{from: location}} replace />
    )
}

export default PrivateRoute