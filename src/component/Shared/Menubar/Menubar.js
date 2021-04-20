import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Menubar.css';

const Menubar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar className="d-flex justify-content-between menu-bar  nav-container" variant="dark" expand="lg">
                <Navbar.Brand style={{color:'#79B530'}} as={Link} to="/"><strong>Laptop Repair</strong></Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  class="navbar navbar-expand-lg navbar-light">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <Link to="/home" class="nav-link ms-5 active text-danger" aria-current="page">Home</Link>
                                <Link to = "/dashboard" class="nav-link ms-5 text-primary">Dashboard</Link>
                                <Link to = "/appointment" class="nav-link ms-5 text-primary">Service</Link>
                                <Link to = "" class="nav-link ms-5 text-primary">Contact</Link>
                                {
                                    loggedInUser.name ?
                                    <Link className='mt-2' as={Link}>{loggedInUser.name} </Link>
                                    : <Link as={Link} to="/login" to = "/login"  style={{borderRadius:'10px',width:'70px', backgroundColor:'lightpink'}} className="text-white text-center nav-link ms-5" >Login</Link>
                                }
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Menubar;