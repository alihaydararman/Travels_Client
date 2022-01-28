import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useHistory, useLocation } from 'react-router';
import Button from '@mui/material/Button';
import { Grid, Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';

const LoginToggle = () => {
    const { signInWithGoogle, user } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const [toggle, setToggle] = useState(false);



    const handleToggle = () => setToggle(value => !value);

    return (

        <Box className='bg-dark'>
            <NavigationBar></NavigationBar>
            <h1>{user?.email}</h1>
            <Container>

                <Grid sx={{ mt: 10 }} className="row">

                    <Box item className='col-lg-6'>
                        {toggle ? <Register /> : <Login />}

                        <Box >
                            <Typography defaultChecked sx={{ textAlign: 'center', my: 2, color: 'darkorange' }}>
                                -----------------or------------------
                            </Typography>
                            <Button sx={{ width: 1, background: 'gray' }} onClick={() => signInWithGoogle(location, history)} variant="contained"><GoogleIcon />Google Sing In</Button>

                            <Box sx={{ mt: 5 }}>
                                {

                                    toggle ?
                                        <Typography
                                            style={{ color: 'red' }} sx={{ display: 'inline' }}>

                                            If you already have an account, please login
                                        </Typography> :
                                        <Typography style={{ color: 'red' }} sx={{ display: 'inline' }}>
                                            If you  not already have an account, please register
                                        </Typography>
                                }
                                <Switch defaultChecked variant="contained" color="secondary" checked={toggle} onClick={handleToggle}></Switch>
                            </Box>
                        </Box>
                    </Box>


                    <Grid item className='col-lg-6'>
                        <img className='img-fluid w-screen' src={toggle ? `https://cdn2.hubspot.net/hubfs/53/registration-form-template.jpg` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwuvoWMhl6YAb-8BWrKD1JN5NKA6qe9rHVQfXQKNAVbmSeAKTPeJ8KGzusoTuWC25OX4&usqp=CAU`} alt="" />
                    </Grid>
                </Grid>



            </Container>

            <Footer />
        </Box>

    );
};

export default LoginToggle;