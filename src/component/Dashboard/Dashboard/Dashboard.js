import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import BookService from '../BookService/BookService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(() =>{
        fetch('http://localhost:6060/admin', {
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
            {loggedInUser.isAdmin ? <MakeAdmin/> : <BookService/>}
        </section>
    );
};

export default Dashboard;