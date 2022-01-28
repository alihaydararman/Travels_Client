import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Travelers from '../Travelers/Travelers';

const Travels = () => {
    return (
        <div>
            <NavigationBar />
            <h1 className=' mt-20 text-3xl text-center text-fuchsia-500 font-bold'>Travel Blogs</h1>
            <Travelers />
            <Footer />
        </div>
    );
};

export default Travels;