import React from 'react';
import Products from '../Products/Products';
import AboutSection from './AboutSection/AboutSection';
import Banner from './Banner/Banner';
import Servicing from './Servicing/Servicing';
import Navigation from '../../Shared/Navigation/Navigation'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Servicing></Servicing>
            <Products></Products>
            <AboutSection></AboutSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;