import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id='contact' className = 'my-5 p-3 contact-container'>
            <div className = 'container'>
                <div className = 'text-center text-white mb-5'>
                    <h5 className='text-brand text-uppercase'>Contact</h5>
                    <h2>Always contact with us</h2>
                </div>
                <div className='col-md-10' style = {{margin:'0 auto'}}>
                    <form action="">
                        <div className = 'form-group'>
                            <input type="text" className = "form-control" placeholder = "Email Address*" />
                        </div>
                        <br/>
                        <div className = 'form-group'>
                            <input type="text" className = "form-control" placeholder = "Name*" />
                        </div>
                        <br/>
                        <div className = 'form-group'>
                            <textarea name = "" className = "form-control" cols = "20" rows = "5" placeholder = "Subject*"></textarea>
                        </div>
                        <br/>
                        <div className = "form-group text-center">
                            <button type = "button" className = "btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;