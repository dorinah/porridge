import * as React from 'react';
import AuthenticationService from '../../services/AuthenticationService.tsx';
import {
    Route,
    Redirect
} from 'react-router-dom';


const PublicRoute = (props: any) => {
    const isLoggedIn = AuthenticationService.getCurrentUser();

    return isLoggedIn   ? (<Redirect to="/dashboard" />)
                        : (<Route {...props} />)
};

export default PublicRoute;