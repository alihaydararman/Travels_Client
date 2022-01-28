import { Alert, AlertTitle, Button, Grid, LinearProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.rePassword) {

            return alert('Your PassWord ded not match')

        }

        registerUser(loginData.email, loginData.password, loginData.name, location, history)


        e.target.reset();
    }
    return (

        <Grid style={{ background: 'pink' }}>
            {
                isLoading ? <LinearProgress /> :
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: 1 }}
                            required
                            id="standard-name-input"
                            label="You Full Name"
                            type="text"
                            name="name"
                            autoComplete="current-name"
                            variant="standard"
                            onBlur={handleOnBlur}
                            color="secondary"
                        /> <br />
                        <TextField
                            sx={{ width: 1 }}
                            required
                            id="standard-email-input"
                            label="You Email"
                            type="email"
                            name="email"
                            autoComplete="current-email"
                            variant="standard"
                            onBlur={handleOnBlur}
                            color="secondary"
                        /> <br />
                        <TextField
                            sx={{ width: 1 }}
                            required
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="standard"
                            onBlur={handleOnBlur}
                            color="secondary"
                        />
                        <TextField
                            sx={{ width: 1 }}
                            required
                            id="standard-password-input"
                            label="Re-type Password"
                            type="password"
                            name="rePassword"
                            autoComplete="current-password"
                            variant="standard"
                            onBlur={handleOnBlur}
                            color="secondary"
                        />
                        <Button color="secondary" sx={{ width: 1, mt: 5 }} type="submit" className="feature-button" variant="contained">Register</Button>
                    </form>
            }

            {
                authError && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {authError} <strong>check it out!</strong>
                </Alert>
            }

        </Grid>

    );
};

export default Register;