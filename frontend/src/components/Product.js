import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';
import item1 from '../images/blue_onWhite.jpg';

const Product = ({picUrl, name, price, description, productId}) => {
    return (
        <div className= "products_screen">
            <div className="img_container">
                <img src={item1} className="product_img" alt="item"/>
            </div>
            <div className="item_info">
               <p className="item_name">{name}</p>
               <p className="item_description"> 
                    <span><strong>Description: </strong></span>{description.substring(0,10)}...</p>
                <p className="item_price">${price}</p>

                <Link to={`./product/${productId}`} className="view_btn">
                    View
                </Link>

                <Link className="add_btn">
                    Add To Cart
                </Link>
            </div>
        </div>
    )
};

export default Product;