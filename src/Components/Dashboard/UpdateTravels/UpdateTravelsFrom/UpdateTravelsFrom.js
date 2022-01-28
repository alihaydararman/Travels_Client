import React, { useEffect, useState } from 'react';
// import { Alert, AlertTitle, Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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


const UpdateTravelsFrom = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}) || "";
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();

    useEffect(() => {
        fetch(`https://hidden-plains-90674.herokuapp.com/travel/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, setProduct])


    const { title, img, description, category, info, address, price, rating } = product;





    let history = useHistory();
    const update = (data) => {
        data.rating = value;
        axios.put(`https://hidden-plains-90674.herokuapp.com/UpdateTravelsFrom/${id}`, data)
            .then(res => {
                if (res?.data?.modifiedCount) {
                    alert('Update SuccessFully')
                    history.push("/dashboard/UpdateTravels");
                }
            })

        reset();
    }
    return (
        <div className=' h-screen update-form-bg'>
            <h1 className='text-yellow-400  text-center fw-bold underline uppercase py-11'>Update Products</h1>
            <div className='col-lg-6'>
                <div>

                </div>
            </div>

            <div className='container-fluid col-lg-6 bg-white card card-body p-3 shadow-2xl'>
                <form onSubmit={handleSubmit(update)}>

                    <input className="form-control rounded-pill " {...register('title', { required: true })} placeholder="Title" defaultValue={title} /> <br />

                    <input className="form-control rounded-pill" {...register('description', { required: true })} placeholder="Description" defaultValue={description} /> <br />

                    <input className="form-control rounded-pill" {...register('img', { required: true })} placeholder="Img URL" defaultValue={img} /> <br />
                    <input className="form-control rounded-pill" {...register('category', { required: true })} placeholder="Category" defaultValue={category} /> <br />
                    <input className="form-control rounded-pill" {...register('info', { required: true })} placeholder="Info" defaultValue={info} /> <br />
                    <input className="form-control rounded-pill" {...register('address', { required: true })} placeholder="Address" defaultValue={address} /> <br />

                    <input className="form-control rounded-pill" {...register('price', { required: true })} placeholder="Price" defaultValue={price} /> <br />

                    <div className={classes.root}>
                        <Rating
                            name="hover-feedback"

                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue === 0 ? rating : newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </div>

                    <input className="form-control rounded-pill  btn-warning shadow-xl " type="submit" value='Update' />


                </form><br />



            </div>

        </div>
    );
};

export default UpdateTravelsFrom;