import React from 'react';
import './Course.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Course = (props) => {
  console.log(props);
  const{img,name,price,courseDuration}=props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""/>
      </div>
      <div>
        <h4 className="product-name course">Course Name: {name}</h4>
        <p className="course-duration course">Course Duration: {courseDuration}</p>
        <p className="product-price course">Price: ${price}</p>
        <button className="btn btn-success ml-3 mt-3" onClick={()=>props.handleAddProduct(props.product)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Course;