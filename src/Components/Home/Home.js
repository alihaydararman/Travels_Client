import React from 'react';
import Banner from '../Shared/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Contact from './Contact/Contact';
import Review from './ShowReview/Review';
import Sitebar from './Sitebar/Sitebar';
import Travelers from './Travelers/Travelers';

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <NavigationBar />
            <Banner />
            <div className='row'>
                <div className='col-md-8'>
                    <Travelers />

                </div>
                <div className='col-md-4'>
                    <Sitebar />
                </div>
            </div>
            <Review></Review>
            <Contact></Contact>
            <Footer />
        </div>
    );
};

export default Home;