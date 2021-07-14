import "./NavBar.css";
import {Link} from 'react-router-dom';
import logoImag from '../images/recognia.png';
import { useSelector } from "react-redux";
import open from '../images/open.jpg';

const   NavBar = ({click}) => {
    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;


    const sumItems = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0)
    }
    return (
        <nav className = "nav_container">
            
            {/* logo */}
        <div className =" left__Nav">
            <div className= "nav_logo">
                <img src={logoImag} alt="company logo"/>
                <h1>Recognia <br/> OceanSky <br/> Fragrances </h1>
            </div>

            {/* links */}
            <ul className="nav__links">
                <li>
                    <Link to= './'>
                        Home    
                    </Link>
                </li>

                <li>
                    <Link to= './products'>
                        Products
                    </Link>
                </li>

                <li>
                    <Link to= './contact'>
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to= './about'>
                        About
                    </Link>
                </li>
            </ul>
        </div>
        <div className= "right__Nav">
            <div className ="user__panel">
                <Link to = "/Signup">
                <p className= "sign__up">Sign Up</p>
                </Link>
                <Link to = "/Login">
                <p className = "log__in">Log In</p>
                </Link>
            </div>

            {/* cart and shop */}
            <div className="cart_div">
                <li>
                    <Link to= '/cart' className= "cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span className= "counter">
                            Cart
                            <span className="cart_counter">{sumItems()}</span>
                        </span>
                    </Link>
                </li>
            </div>
        </div>
            {/* hamburger */}
                <i id="open" className=" fas fa-bars" onClick={click}></i>
        </nav>
    )
}

export default NavBar;