import { Button, Link } from '@mui/material';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link onClick={() => paginate(number)} style={{ textDecoration: 'none', padding: '0' }} to='!#' className='page-link cursor-pointer'>
                            <Button size='small'>{number}</Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;