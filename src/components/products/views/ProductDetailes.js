import React, {useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setAProduct, removeSeletedProduct } from '../action-creator';

const ProductDetailes = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {selectedProduct} = useSelector(state => state.productReducer);

    useEffect(() => {
        if(id){
            dispatch(setAProduct(id));
        }
        return () => {
            dispatch(removeSeletedProduct());
        }
        
    }, [id]);


    return (
        <>
            <Link to='/' style={{textDecoration: 'none', fontSize: '30px'}}>Go back</Link>
            <h3>Product Title: {selectedProduct.title}</h3>
            <h3>Product details: {selectedProduct.description}</h3>
            <img src={selectedProduct.image} />
        </>
  );
};

export default ProductDetailes;
