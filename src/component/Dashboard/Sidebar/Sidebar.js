import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faClipboardList,faPlus, faShoppingCart, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className = 'order  sidebar col-md-2'>

            <div className = 'mt-2' style={{height:'100vh'}}>
                <ul className='list-unstyled p-3'>
                    {loggedInUser.isAdmin  ?   
                        <div>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faClipboardList} />
                                <Link className='text-white ms-1' to='/orders'>Order List</Link>
                            </li>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faPlus} />
                                <Link className='text-white ms-1' to='/addService'>Add Service</Link>
                            </li>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faUserPlus} />
                                <Link className='text-white ms-1' to='/admin'>Make Admin</Link>
                            </li>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faPlus} />
                                <Link className='text-white ms-1' to='/engineer'>Add Engineers</Link>
                            </li>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faThList} />
                                <Link className='text-white ms-1' to='/manage'>Manage</Link>
                            </li>
                        </div>
                            :
                        <div>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <Link className='text-white ms-1' to='/service/:_id'>Book Service</Link>
                            </li>
                            <li className='mb-3 text-white'>
                                <FontAwesomeIcon icon={faClipboardList} />
                                <Link className='text-white ms-1' to='/serviceList'>Service List</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon icon={faCashRegister} />
                                <Link className='text-white ms-1' to='/review'>Review</Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;