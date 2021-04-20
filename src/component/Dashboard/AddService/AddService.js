import React, { useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './AddService.css'
import Sidebar from '../Sidebar/Sidebar';
const AddService = () => {
    const { register, handleSubmit} = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    
    const onSubmit = data =>{
        const repairData = {
            name: data.name,
            price: data.price,
            time: data.time,
            imageUrl: imageUrl
        };
        console.log(data);
        const url =`http://localhost:6060/addServices`;
        fetch(url , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(repairData)
        })
        .then(click =>{
            if(click){
                alert('service add successfully')
            }
        })
    }

    const handleImageUpload = (event) =>{
        const imageData = new FormData();
        imageData.set('key', 'ea19e2658f41ecd5ad3befd299525445');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData
        )
      .then(res =>{
        setImageUrl(res.data.data.display_url);
      })
      .catch(error =>{
          console.log(error);
      })
    }

    return (
        <div className="row ">
            <Sidebar/>
            <div className="col-md-10">
                <div className="add-service">
                        <h4>Add Service</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className='col-md-6'>
                                <label htmlFor="">Repair Name</label>
                                <input name="name" className="form-control" defaultValue="" placeholder="Repair Name" {...register("name", {required:true})} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">Time</label>
                                <input name="time" className="form-control" defaultValue="" placeholder="Time" {...register("time", {required:true})} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">price</label>
                                <input name="price" className="form-control" defaultValue="" placeholder="price" {...register("price", {required:true})} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="">add image</label>
                                <br/>
                                <input name="image"  type="file"   onChange={handleImageUpload} className='form-control' />
                            </div>
                        </div>
                        <br/>
                        <input className='btn btn-brand' type="submit" />
                    </form>
                  
                </div>
            </div>
        </div>
    );
};

export default AddService;