import { Button, Rating } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import './Travelers.css'
// import Rating from '@material-ui/lab/Rating';

const Travelers = () => {
    const [travels, setTravels] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    useEffect(() => {
        fetch('https://frozen-island-30470.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data))

    }, [])

    const managePost = travels?.filter(travel => travel?.role === true);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = managePost.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className="text-gray-600">

            <div className="max-w-6xl mx-auto">
                <div className=" flex justify-around flex-wrap">
                    {
                        currentPosts?.reverse()?.map(travel =>

                            <div key={travel?._id} className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3 cursor-pointer bg-dark card ">
                                <div className="bg-white shadow-xxl rounded-lg overflow-hidden">
                                    <div className="bg-cover bg-center h-56 " >
                                        <div className="flex justify-end">
                                            <img src={travel?.img} className='card-img-top' alt="" />
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between">
                                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{travel?.title}</p>
                                        <p className="text-3xl text-red-500">${travel?.price}</p>

                                    </div>
                                    <div className="flex p-4 border-t border-gray-300 text-gray-700 justify-between bg-transparent border-0 ps-0">
                                        <Link to={`travelsDetails/${travel?._id}`}><Button className='product-name btn btn-outline-warning mr-2'>Details</Button></Link>
                                        <Rating

                                            value={travel?.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>

                                </div>
                            </div>

                        )
                    }
                </div>
                <div className=' flex justify-center mb-3'>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={currentPosts?.length}
                        paginate={paginate}
                    ></Pagination>
                </div>
            </div>

        </section>
    );
};

export default Travelers;