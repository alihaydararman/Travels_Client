import { Alert, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const RequestGet = () => {
    const [requestData, setRequestData] = useState([]) || ''
    useEffect(() => {
        fetch('https://evening-woodland-47343.herokuapp.com/request')
            .then(res => res.json())
            .then(data => setRequestData(data))
    }, [setRequestData]);

    const deleteMassage = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://evening-woodland-47343.herokuapp.com/massageDelete/${id}`)
                .then(res => {
                    res.data.deletedCount &&
                        fetch('https://evening-woodland-47343.herokuapp.com/request')
                            .then(res => res.json())
                            .then(data => setRequestData(data))
                }

                )
    }
    return (
        <div>
            <h1 className='mt-10 pb-4'>Customer Request</h1>

            {
                requestData?.map((request, index) =>
                    <div key={index}>
                        <Box severity="warning" className=' mt-2 border p-2 bg-blue-50'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <Typography className=' text-pink-500'> Email: {request?.email}</Typography>
                                    <Typography>Customer Name: {request?.name}</Typography>
                                    <Alert severity="info">Massage: {request?.massage}</Alert>
                                </div>

                                <div>
                                    <Button onClick={() => deleteMassage(request?._id)} size='small' variant="outlined" color='secondary'>Delete</Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                )
            }
        </div>
    );
};

export default RequestGet;