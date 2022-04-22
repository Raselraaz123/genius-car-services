import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequierAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user,loading] = useAuthState(auth);
  console.log('inside requierAuth' ,user)
  const location = useLocation();

  if (loading) {
  return <Loading></Loading>
}

  if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log(user)
  if (user.providerData[0].providerId ==='password' && !user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger text-center">
          your Email is not verified!!
        </h3>
        <h4 className="text-success">please verified your email address</h4>
        <button
          className='btn btn-primary'
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
        Send Verification email Again
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequierAuth;