import React from 'react';
import Contact from '../Contact/Contact';
import Engineers from '../Engineers/Engineers';
import Header from '../Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/> 
            <Services/> 
            <Testimonials/> 
            <Engineers/>
            <Contact/>
            <Footer/>  
        </div>
    );
};

export default Home;