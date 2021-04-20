import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import './AddEngineer.css';

const AddExperts = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    
    const onSubmit = data =>{
        const engineerData = {
            name:data.name,
            position: data.post,
            imageUrl: imageUrl
        }
        fetch('https://quiet-inlet-08578.herokuapp.com/addEngineers',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(engineerData)
        })
        .then(res => res.json())
        .then(experts =>{
            if(experts){
                alert('added engineer successfully');
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
        <div className="row">
            <Sidebar/> 
            <div className="col-md-10 body-content">
                <div className="engineer">
                        <h4>Add Engineers</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="">Engineer Name</label>
                            <input name="name" className="form-control" defaultValue="" placeholder="Engineer Name" {...register("name", {required:true})} />
                        </div>
                        <div>
                            <label htmlFor="">Position</label>
                            <input name="post" className="form-control" defaultValue="" placeholder="Position" {...register("post", {required:true})} />
                        </div>
                    
                        <div>
                            <label htmlFor="">add image</label>
                            <br/>
                            <input name="image" className="form-control" type="file"   onChange={handleImageUpload} />
                        </div>
                    
                        <br/>
                        <input className='btn btn-brand' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddExperts;