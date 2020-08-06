import React, { Fragment } from 'react';
import { BsFillExclamationTriangleFill } from "react-icons/bs";
const NotFound = () => {
  return (
    <Fragment>
      <h1 className="x-large text-success" >
       
        <BsFillExclamationTriangleFill style={{ marginRight: "90%" }} />
        Page Not Found
      </h1>
      <p className="large" style={{fontSize:"25px", marginLeft:"5%",fontWeight:"bold"}}> This page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
