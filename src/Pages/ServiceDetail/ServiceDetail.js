import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1 className="text-center">Welcome to Service Detail : {serviceId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary text-center">
            Proceed Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;