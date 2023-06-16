import React from 'react';

const Product = (props) => {
  return (
    <div className='product-main'>
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.price}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default Product;
