import React from 'react';
import AddedTravel from '../../Dashboard/AddedTravels/AddedTravels';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const TravelPost = () => {
    return (

        <div className=''>
            <NavigationBar />

            <AddedTravel></AddedTravel>
            <Footer />
        </div>

    );
};

export default TravelPost;