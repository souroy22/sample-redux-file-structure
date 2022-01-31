import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({id, title, description, price}) => {
  return (
      <Link to={`/product/${id}`}>
        <div style={{
            border: '2px solid black', 
            padding: '10px', 
            display: 'flex', 
            flexDirection: 'column', 
            width: '300px', 
            margin: '20px',
            flexWrap: 'wrap',
            textAlign: 'center',
            cursor: 'pointer'
        }}>
            <h1>{title}</h1>
            <h5>{description}</h5>
            <h4>₹{price}</h4>
        </div>
    </Link>
  );
};

export default Product;
