import React from 'react';
import './ProductPage.css';
import item1 from '../images/blue_onWhite.jpg';
import { useEffect, useState } from 'react';

// hooks
import { useSelector , useDispatch } from 'react-redux';

// action
import { getProductDetails } from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';



const ProductPage = ( {match, history}) => {
    const [qty, setQty] =  useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { product, loading, error } = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id ){
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id,qty));
        history.push('/cart');
    }

    return (
        <div className= "Productpage">
            <div className="product_container">

            {loading ? <h2>Loading! please wait ...</h2> : error ? <h1>{error}</h1> : (
            <>
            <div className="left_product_info">
                    <div className="item_pic">
                        <img src={item1} className="pic" alt="{product.name}"></img>
                    </div>
                    <div className="left_info">
                        <p className="left_item_name">{product.name}</p>
                        <p className="price">Price <span>${product.price}</span></p>
                        <p className="item_description">{product.description}</p>
                    </div>
                </div>

                <div className="right_product_info">
                    <div className="right_info">
                        <p className="price">Price<span>${product.price}</span></p>
                        <p className="stock_stock">Status<span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>
                        <p className="item_quantity">
                            Quantity
                            <select value = {qty} onChange = {(e) => setQty(e.target.value)}>
                               {[...Array(product.countInStock).keys()]
                               .map((x) => (
                                   <option key= {x+1} value= {x+1} >{x+1}</option>
                               ))}
                            </select>
                            </p>
                            <p>
                                <button onClick = {addToCartHandler} type="button">Add To Cart</button>
                            </p>
                    </div>
                </div>
            </>
            )}

           </div>
           <h1>You may also be interested in this</h1>
        </div>
    )
};

export default ProductPage;