import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Test = () => {
    const [loginData, setLoginData] = useState({});



    const login = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()


        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleLoginSubmit}>

                <TextField
                    sx={{ width: 1 }}
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
                    sx={{ width: 1 }}
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
                <Button color="secondary" type="submit" sx={{ width: 1, mt: 5 }} className="feature-button" variant="contained">Login</Button>

            </form>

        </div>
    );
};

export default Test;