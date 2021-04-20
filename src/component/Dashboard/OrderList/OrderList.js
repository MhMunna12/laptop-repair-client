import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css';
const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [tatus, setTatus] = useState(null);

    const handleGetId = (id) => {
        setItemId(id);
    }


    const updateStatus = (status) => {
        fetch(`https://quiet-inlet-08578.herokuapp.com/update/${itemId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('status modified successfully');
                }
            })
    }

    const handleStatusChange = e => {
        const status = { value: e.target.value };
        updateStatus(status);
        setTatus(status);
    }
    useEffect(() =>{
        fetch('https://quiet-inlet-08578.herokuapp.com/orderList')
        .then(res => res.json())
        .then(data => setOrderList(data))
    },[orderList])
    return (
        <div className = 'row'>
            <Sidebar/>
            <div className = 'col-md-10 body-content'>
                <div className="orders-list">
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <h3>Orders List</h3>
                            </div>
                            <div>
                                <h6 className='mt-2'>{loggedInUser.name}</h6>
                            </div>
                        </div>
                        
                        <div className="order-area">
                        <Table striped hover size="sm">
                            <thead>
                                <tr className="table-tr">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                    <th>Process</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList.map(order => 
                                    <tr>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.serviceName}</td>
                                        <td>{order.pay}</td>
                                        <td>{order.status}</td>

                                        <td>
                                            <select onChange={handleStatusChange} onFocus={() => handleGetId(`${order._id}`)} class="form-select"  aria-label="Default select example">
                                                <option value="pending">Pending</option>
                                                <option value="onGoing">On going</option>
                                                <option value="Done">Done</option>
                                            </select>
                                            
                                       </td>    
                                        
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;