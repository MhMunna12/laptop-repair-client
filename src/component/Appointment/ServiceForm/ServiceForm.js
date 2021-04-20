import React,{useContext, useState} from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import Payment from '../../Appointment/Payment/Payment'
import { UserContext } from '../../../App';

const customStyles = {
  content : {
    width                 : '500px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#root')
const ServiceForm = ({modalIsOpen, closeModal, serviceOn, date, price}) => {
    const { register, handleSubmit} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [confirm, setConfirm] = useState(false);
    const [serviceInfo, setServiceInfo] = useState({});
    const onSubmit = ()=> {
        handlePaymentSuccess();
        setConfirm(true)
    }
     const handlePaymentSuccess = () =>{
        const newServiceInfo = {...serviceInfo}
        newServiceInfo.name = loggedInUser.name;
        newServiceInfo.email = loggedInUser.email;
        newServiceInfo.serviceName = serviceOn;
        newServiceInfo.servicePrice = price;
        console.log(newServiceInfo);
        setServiceInfo(newServiceInfo);
     }
    return (
        <div>
            <Modal  
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

            
                {confirm ? 
                    <div>
                        <Payment serviceInfo = {serviceInfo} />
                    </div> :

                    <div >
                    <h5 className ='text-center text-danger'>service charged  ${price}</h5>
                    <p className = 'text-secondary text-center'><small>On {date.toDateString()}</small></p>
                    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input value={loggedInUser.name} name="name" type='text' {...register("name", {required:true})}  placeholder='Your Name' className="form-control  mb-3" />
                        </div>
                    
                        <div className="form-group">
                            <input value = {loggedInUser.email}  name="email" type='text' {...register("email", {required:true})}  placeholder='Email' className="form-control  mb-3" />
                        </div>

                        <div className="form-group">
                            <input value = {serviceOn}  name="service" type='text' {...register("service", {required:true})}  placeholder='Email' className="form-control  mb-3" />
                        </div>

                        <div className="form-group d-flex justify-content-end">
                            <button type="submit" className="btn btn-brand text-white">Send</button>
                        </div>
                    </form>
                </div>
            }  
            </Modal>
            <div>
                
            </div>
        </div>
    );
};

export default ServiceForm;