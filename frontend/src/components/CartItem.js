import './CartItem.css';
import {Link} from 'react-router-dom';
import item1 from '../images/blue_onWhite.jpg';

const CartItem = ({item , quantityChangeHandler,removeCartItem}) => {
    return (
        <div className= "CartItem">
           <div className="cart_image">
               <img src={item1} alt={item.name}/>
           </div>

           <Link to={`./product/${item.product}`} className="cartItem_name">
                <p>{item.name}</p>
           </Link>

           <p className="cart_item_price">${item.price}</p>

           <select className="cartItem_select" 
           value = {item.qty} 
           onChange = {(e) => quantityChangeHandler(item.product,e.target.value)}>
               {[...Array(item.countInStock).keys()].map(x => (
                   <option key = {x+1} value ={x+1}> {x+1} </option>
               ))}
           </select>

            <button className="cartItem_del" onClick ={() => removeCartItem(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};

export default CartItem;