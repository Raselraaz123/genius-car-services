import React from 'react';
import './SocialLogin.css'
import google from '../../../images/social-icon/google.png'
import facebook from '../../../images/social-icon/facebook.png'
import github from '../../../images/social-icon/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
    if (error) {
   
    errorElement=<div>
          <p className='text-danger'>Error: {error.message}</p>
        </div>

  }
  
  if (user) {
    navigate('/home')
  }
  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="mb-2">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-white text-dark d-block mx-auto w-50 rounded border border-light "
        >
          <img src={google} alt="" />
          Google sign in
        </button>
      </div>
      <div className="mb-2">
        <button className="bg-white text-dark d-block mx-auto w-50 rounded border border-light  ">
          <img src={facebook} alt="" />
          Facebook sign in
        </button>
      </div>
      <div className="mb-2">
        <button className="bg-white text-dark d-block mx-auto w-50 rounded border border-light py-2 ">
          <img style={{ marginRight: "10px" }} src={github} alt="" />
          Github sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;