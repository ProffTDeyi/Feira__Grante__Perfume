import './SideDraw.css';
import {Link} from 'react-router-dom';
import SideDrawlogoImage from '../images/recognia.png';
import { useSelector } from 'react-redux';

const SideDraw = ({show, click}) => {
    const sideDrawClass =["side_draw"];
    if (show){
        sideDrawClass.push("show");
    }

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;


    const sumItems = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0)
    }

    return (
        <div className= {sideDrawClass.join(" ")}>
             <div className= "SideDraw_Nav_logo">
                <img src={SideDrawlogoImage} alt="company logo"/>
                <h1>Recognia <br/> OceanSky <br/> Fragrances </h1>
            </div>
            <hr></hr>

            <ul className="sideDrawer_links" onClick={click}>
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
                <hr></hr>

                <li className="sideDraw_CartLink">
                    <Link to= '/cart' className= "SideDraw_cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span className= "SideDraw_counter">
                            Cart
                            <span className="SideDraw_cart_counter">{sumItems()}</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>

    )
};

export default SideDraw;