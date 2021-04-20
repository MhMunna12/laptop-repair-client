import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminInfo, setAdminInfo] = useState({});
    const { register, handleSubmit} = useForm();

    const onSubmit = data =>{
        handleAdmin();
    }
    const handleAdmin = () => {
        const newAdminInfo = {...adminInfo}
        newAdminInfo.email = loggedInUser.email;
        setAdminInfo(newAdminInfo);
        console.log(newAdminInfo);

        fetch('http://localhost:6060/addAdmin',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAdminInfo)
        })
        .then(res => res.json())
        .then(admin =>{
            if(admin){
                alert('added admin successfully');
            }
        })
    }
    
    return (
        <div className="row">
            <Sidebar/>
            <div className="col-md-10">
                <div className="admin">
                        <h4>Admin</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="">Email</label>
                                <input value={loggedInUser.email} name="email" className="form-control" defaultValue="" placeholder="Email" {...register("email", {required:true})} />
                            </div>
                        <br/>
                        <input className='btn btn-brand' type="submit" />
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;