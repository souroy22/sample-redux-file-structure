import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from '../action-creater';

const Header = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productReducer);
  const onSearch = (value) => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(searchProducts(value, products));}, 300
    );
  }
  return (
    <div style={{ width: "100%", backgroundColor: "black", color: "#fff", display: 'flex', justifyContent: 'space-between', height: '60px', margin: 0 }}>
      <section>
        <h1>Open Mall</h1>
      </section>
      <section style={{ width: '50%', display: 'flex', justifyContent: 'space-around' }}>
        <input placeholder='search..' style={{ width: '300px', height: '40px', outlineStyle: 'none', fontSize: '22px' }} onChange={(event) => onSearch(event.target.value)} />
        <h3>Cart</h3>
      </section>
    </div>
  );
};

Header.propTypes = {};

export default Header;
