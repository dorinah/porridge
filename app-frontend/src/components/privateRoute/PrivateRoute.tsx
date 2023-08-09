import * as React from 'react';
import AuthenticationService from '../../services/AuthenticationService.tsx';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';

type PrivateRouteProps = { component: any } & RouteProps;

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    const isLoggedIn = AuthenticationService.getCurrentUser();

    return (
        <Route
            {...rest}
            render={(routeProps:any) =>
                isLoggedIn ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;