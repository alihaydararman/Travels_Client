import React, { useState } from 'react';
import { Alert, AlertTitle, Button, Grid, TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const login = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        await loginUser(loginData.email, loginData.password, location, history)

        e.target.reset();
    }
    return (

        <Grid Grid sx={{ mt: 6 }}>
            <form onSubmit={handleLoginSubmit}>

                <TextField
                    sx={{ width: 1, background: 'gray' }}
                    required
                    id="standard-password-email"
                    label="You Email"
                    type="email"
                    name="email"
                    autoComplete="current-email"
                    variant="standard"
                    onChange={login}
                    color="secondary"

                ></TextField> <br />
                <TextField
                    sx={{ width: 1, background: 'gray' }}
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={login}
                    color="secondary"
                />
                <Button color="secondary" type="submit" sx={{ width: 1, mt: 5, background: 'gray' }} className="feature-button" variant="contained">Login</Button>

            </form>


            {authError && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {authError} <strong>check it out!</strong>
            </Alert>}
        </Grid>
    );
};

export default Login;