import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../action-creator";
import Product from './Product';

const ProductList = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.productReducer);
    const {searchedProducts} = useSelector(state => state.searchProductReducer);

    useEffect(() => {
        dispatch(setProducts());
    }, []);

    return (
        <div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {!searchedProducts.length ?
                products.map(product => 
                    <Product 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        description={product.description} 
                        price={product.price} 
                    />
                ) : 
                searchedProducts.map(product => 
                    <Product 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        description={product.description} 
                        price={product.price} 
                    />
                )
                }
        </div>
        </div>
    );
};

export default ProductList;
