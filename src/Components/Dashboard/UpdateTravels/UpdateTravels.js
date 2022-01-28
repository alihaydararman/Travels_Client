import React, { useEffect, useState } from 'react';
import { Button, Box, CardActions, Rating } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const UpdateTravels = () => {


    const [travels, setTravels] = useState([])
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        fetch('https://hidden-plains-90674.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data) || '')
    }, [])
    const managePost = travels?.filter(travel => travel.role === true);


    const handleTravelsDelete = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://hidden-plains-90674.herokuapp.com/travelDelete/${id}`)
                .then(res => res.data.deletedCount &&
                    fetch('https://hidden-plains-90674.herokuapp.com/travels')
                        .then(res => res.json())
                        .then(data => setTravels(data) || '')
                        .finally(() => {
                            setOpen(true);
                        })
                )


    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    return (
        <div>
            <h1 className='text-pink-700 underline uppercase py-4 text-4xl font-bold text-center'>Update Product</h1>
            <div className="row row-cols-1 row-cols-sm-4  row-cols-md-2 row-cols-lg-4 g-4">
                {
                    managePost?.reverse()?.map(travel =>
                        <div className="col ">
                            <Box className="">
                                <div className="bg-cover bg-center h-56 " >
                                    <div className="flex justify-end">
                                        <img src={travel?.img} alt="" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-xl font-bold">{travel?.title}</h5>
                                    <div className=' flex justify-between'>
                                        <h3 className="card-text text-2xl font-bold text-rose-500">{travel?.price}</h3>
                                        <Rating

                                            value={travel?.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>

                                </div>

                                <CardActions className="card-footer d-flex justify-content-between">
                                    <Link to={`updateTravelsFrom/${travel._id}`}>
                                        <Button sx={{ width: 100, p: 0 }} >Update</Button>
                                    </Link>
                                    <Button onClick={() => handleTravelsDelete(travel?._id)} sx={{ width: 100, p: 0 }} >Delete</Button>
                                </CardActions>
                            </Box>
                        </div>)
                }
            </div>
            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Delete success!
                    </Alert>
                </Snackbar>

            </Stack>

        </div >
    );
};

export default UpdateTravels;