import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
 const navigate = useNavigate();

    const navigateLogin = (event) => {
      navigate("/login");
  };
  const handleSubmitRegisterForm = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
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
        <input type="submit" value="Register" />
      </form>
      <p className="text-center">
        Already have a account ?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none "
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;