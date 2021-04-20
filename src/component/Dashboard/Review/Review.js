import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import './Review.css';
const Review = () => {
    const { register, handleSubmit} = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data =>{
        const reviewData = {
            name:data.name,
            comment: data.comment,
            description: data.description,
            imageUrl: imageUrl
        }
        console.log(data);
        fetch('https://quiet-inlet-08578.herokuapp.com/addReview',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(review =>{
            if(review){
                alert('review added')
            }
        })
    }

    const handleImageUpload = (event)=>{
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
        <div>
            <div className="row">
                <Sidebar/>
                <div className="col-md-10 body-content">
                    <div className="add-review">
                            <h4>Add Book</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className='col-md-6'>
                                    <label htmlFor="">Name</label>
                                    <input name="name" className="form-control" defaultValue="" placeholder="Name" {...register("name", {required:true})} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Description</label>
                                    <input name="description" className="form-control" defaultValue="" placeholder="Description" {...register("description", {required:true})} />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Comment</label>
                                    <textarea name="comment" id="" cols="7" rows="4" placeholder="write your comment" {...register("comment", {required:true})} className='form-control'></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">add image</label>
                                    <br/>
                                    <input name="image"  type="file" className='form-control'  onChange={handleImageUpload} />
                                </div>
                            </div>
                            <br/>
                            <input className='btn btn-brand' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;