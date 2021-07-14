import React from 'react';
import './ProductsPage.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';

// Components
import Product from '../components/Product';

// Actions
import {getProducts as listProducts} from '../redux/actions/productActions'



const ProductsPage = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(()=> {
        dispatch(listProducts());
    }, [dispatch]);

    return <div className= "Productspage">
                <h2 className= "products_title">Latest Products</h2>

                <div className="products_container">
                    {loading ? <h1>Loading! please wait...</h1> : error ? <h2>{error}</h2> : products.map( (product) =>
                    
                    <Product 
                    key ={product._id}
                    productId = {product._id}
                    name= {product.name}
                    price= {product.price}
                    description = {product.description}
                    picUrl = {product.picUrl}
                    />)
                    };
                </div>

            </div>
    
};

export default ProductsPage;