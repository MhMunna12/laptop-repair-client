import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import BookService from '../BookService/BookService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(() =>{
        fetch('https://quiet-inlet-08578.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data =>{
            const newLogInfo = {...loggedInUser};
            newLogInfo.isAdmin = data;
            setLoggedInUser(newLogInfo);
        })
    },[])
    return (
        <section>
            {loggedInUser.isAdmin ? <MakeAdmin/> : <ServiceList/>}
        </section>
    );
};

export default Dashboard;