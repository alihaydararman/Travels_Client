import React from 'react';
import { Redirect, Route } from 'react-router-dom';


import Spinner from '../../Hooks/Spinner';
import useAuth from '../../Hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth()


    if (!admin) {
        return <Spinner />
    }
    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email && admin ? children : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default AdminRoute;