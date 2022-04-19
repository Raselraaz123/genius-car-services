import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import './Register.css'
import auth from '../../../firebase.init';  
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
  const [agree, setAgree] = useState(false);
const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

 const navigate = useNavigate();

    const navigateLogin = () => {
      navigate("/login");
    
  };

 if (loading || updating) {
   return <Loading></Loading>;
 } 

    if (user) {
      console.log('user',user);
    }
  const handleSubmitRegisterForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checkbox;
  

    await  createUserWithEmailAndPassword(email, password);
   await updateProfile({ displayName:name });
    console.log("Updated profile");
     navigate("/home");
  }
  return (
    <div className="register-form ">
      <h2 className="text-center text-primary mt-3 mb-3">Please Register</h2>
      <form onSubmit={handleSubmitRegisterForm}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input onClick={()=>setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
        <label className={agree ? 'text-primary':'text-danger'} htmlFor="terms">Accept Genius Car Terms and Condition</label>
        <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
      </form>
      <p className="text-center">
        Already have a account ?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none "
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;