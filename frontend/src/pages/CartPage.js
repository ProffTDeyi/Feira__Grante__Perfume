import './CartPage.css';
import { Link } from 'react-router-dom';

// hooks
import { useSelector, useDispatch } from "react-redux";

// components
import CartItem from '../components/CartItem'

// actions
import { addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartPage = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;


    const quantityChangeHandler = (qty,id) => {
        dispatch(addToCart(id,qty));
    }

    const removeCartItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const sumItems = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0);
    };

    const sumCartPriceSubTotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price, 0);
    };
    return (
        <div className= "Cartpage">
            <div className="Cart_left">
            <h2>Your Shopping Cart List</h2>
                {cartItems.length === 0 ? (
                <div>
                    <p>Your Shopping Cart Is Empty. To buy one or more Items Click <strong>"Add To Cart" </strong> 
                    next to the Item in the Products Page Click  <Link to = '/products'>Here</Link> to Go Back</p>
                </div>
                ) :  cartItems.map(item => (
                    <CartItem 
                    key = {item.product}
                    item = {item} 
                    quantityChangeHandler= {quantityChangeHandler}
                    removeCartItem = {removeCartItem}
                    />
                ))}
            </div>

            <div className="Cart_right">
                <div className="Cartpage_info">
                <p>Sub Total ({sumItems()}) Items</p>
                <p>${sumCartPriceSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button className="checkout">Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    )
};

export default CartPage;