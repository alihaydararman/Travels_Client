import React, { useState } from 'react';
import { Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});
const AddedTravel = () => {
    const [travelerData, setTravelerData] = useState({});
    const { user, isLoading } = useAuth();
    const [rating, setRating] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const { admin } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newTravelerData = { ...travelerData }
        newTravelerData[field] = value;
        setTravelerData(newTravelerData)

    }
    console.log(admin)
    const handleAddAProduct = (e) => {
        e.preventDefault();

        travelerData.date = new Date().toDateString();
        travelerData.time = new Date().toTimeString();
        travelerData.user = user.displayName;
        travelerData.rating = rating;
        travelerData.role = admin;

        console.log(travelerData)
        fetch('https://frozen-island-30470.herokuapp.com/travelPost', {
            method: "POST",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(travelerData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added travel success')
                }
            })

        e.target.reset();
    }
    return (
        <div style={{ height: '100vh', backgroundImage: 'url(https://cdn.checkfront.com/wp-content/uploads/2016/10/shutterstock_268004744-2.jpg)', backgroundSize: 'cover' }} className=' container'>
            <Typography style={{ alignItems: 'center', textAlign: 'center' }} variant='h4' className='text-pink-600 pt-20 text-light'>
                ADD Your Travels Blog
            </Typography>

            <Box className='row'>
                <Grid className='col-lg-5 mt-lg-5 container'>
                    {
                        isLoading ? <LinearProgress /> :
                            <form onSubmit={handleAddAProduct} className='text-light text-lg'>
                                <TextField
                                    sx={{ width: 1, color: 'white' }}
                                    required
                                    id="standard-name-input"
                                    label="Blog Title"
                                    type="text"
                                    name="title"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-text-input"
                                    label="Description"
                                    type="text"
                                    name="description"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-text-input"
                                    label="IMG URL"
                                    type="text"
                                    name="img"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-text-input"
                                    label="Category"
                                    type="text"
                                    name="category"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-text-input"
                                    label="Info"
                                    type="text"
                                    name="info"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-text-input"
                                    label="Address"
                                    type="text"
                                    name="address"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                /> <br />
                                <TextField
                                    sx={{ width: 1 }}
                                    required
                                    id="standard-number-input"
                                    label="price"
                                    type="number"
                                    name="price"
                                    variant="standard"
                                    onBlur={handleOnBlur}
                                    color="warning"
                                />
                                <div className={classes.root}>
                                    <span>Rating: </span> <Rating
                                        name="hover-feedback"
                                        value={rating}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                    />
                                    {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
                                </div>
                                <Button sx={{ width: 1, mt: 5 }} color='error' type="submit" className="feature-button" variant="contained">Submit Blog</Button>
                            </form>
                    }


                </Grid>
                <Grid className="col-lg-7">

                </Grid>
            </Box>
        </div>
    );
};

export default AddedTravel;