import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light nav-container">
                <div class="container-fluid">
                        
                        <div class="d-flex collapse navbar-collapse  " id="navbarSupportedContent">
                        <div>
                            <h3 className='text-brand'>Laptop services</h3>
                        </div>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to="/home" class="nav-link ms-5 active" aria-current="page">Home</Link>
                            <Link to = "/dashboard" class="nav-link ms-5">Dashboard</Link>
                            <Link to = "/appointment" class="nav-link ms-5">Service</Link>
                            <Link to = "" class="nav-link ms-5">Contact</Link>
                            
                            {
                                loggedInUser.name ?
                                <Link className='mt-2' as={Link}>{loggedInUser.name} </Link>
                                : <Link as={Link} to="/login" to = "/login"  style={{borderRadius:'10px',width:'70px', backgroundColor:'lightpink'}} className="text-white text-center nav-link ms-5 mt-2" >Login</Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;