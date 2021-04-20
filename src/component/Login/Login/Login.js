import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import google from '../../../images/google.png'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
  
    const handleGoogleSignIn = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email}
            setLoggedInUser(signInUser)
            history.replace(from)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    }
    return (
        <div className ='container login-container'>
                <div className='shadow p-3'>
                    <h2 className ='mb-3 text-secondary'>Login</h2>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    
                    <div className="from-group mt-5">
                        <Button  className="btn btn-brand" block onClick={handleGoogleSignIn} ><img style={{height:'25px'}} src={google} alt=""/> Google Sign in</Button>
                    </div>
                </div>
            </div>
    );
};

export default Login;