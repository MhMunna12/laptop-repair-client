import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../../Appointment/Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import './BookService.css';
const BookService = () => {
    const { register, handleSubmit} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [confirm, setConfirm] = useState(false);
    const [serviceInfo, setServiceInfo] = useState({});
    
    const {_id} = useParams();
    console.log('id',_id);
    console.log('sakil',_id);
    const [service, setService] = useState({})

    useEffect(()=>{
        fetch(`https://quiet-inlet-08578.herokuapp.com/service/${_id}`)
        
        .then(res => res.json())
        .then(data =>setService(data))
    },[])
    const {name, price} = service;
    // console.log(service);
    
    const onSubmit = () =>{
        setConfirm(true)
        handlePaymentSuccess();
    } 

    const handlePaymentSuccess = () =>{
        const newServiceInfo = {...serviceInfo}
        newServiceInfo.name = loggedInUser.name;
        newServiceInfo.email = loggedInUser.email;
        newServiceInfo.serviceName = name;
        newServiceInfo.servicePrice = price;
        newServiceInfo.status = 'pending';
        newServiceInfo.pay = 'Credit Card';
        console.log('now',newServiceInfo);

        setServiceInfo(newServiceInfo);
    }
    
    return (
        <div>
            <div className="row">
                <Sidebar/>
                <div className="col-md-10">
                    <div className="book-service">
                            <h4>Service</h4>
                        {
                            confirm ?
                            <div>
                                <h3 className='mt-5'>Pay With</h3>
                                <Payment serviceInfo = {serviceInfo} />
                            </div>
                                :
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Name</label>
                                <input value={loggedInUser.name}  name="name" className="form-control" defaultValue="" placeholder="Name" {...register("name", {required:true})} />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input value={loggedInUser.email} name="email" className="form-control" defaultValue="" placeholder="" {...register("email", {required:true})} />
                            </div>
                            <div >
                                <label htmlFor="">Service Name</label>
                                <input value={name} name="sName" className="form-control" defaultValue="" placeholder="" {...register("sName", {required:true})} />
                            </div>
                                <h2 className='mt-3'>Service charged$ {price}</h2>
                            <br/>
                            <input className='btn btn-brand' type="submit" />
                        </form>
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;