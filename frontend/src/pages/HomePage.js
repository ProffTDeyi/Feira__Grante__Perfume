import './HomePage.css';
import {Link} from "react-router-dom";

// images
import purple from '../images/purple_petals.jpg'
import delivery from '../images/delivery.png'
import shopping from '../images/shopping_cart.png'

const HomePage = () => {
    return (
        <div className= "Homepage">
          <div className="teaser">
              <div className="teaser_text">
                    <h1>
                    Welcome...
                    </h1>
                    <h3> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Fugiat, similique asperiores vero sapiente doloremque ducimus.
                    </h3>
                    <Link to="./products">
                    <button className="products">Shop Now</button>
                    </Link>
                </div>
            </div>


          <div className="services">

            <h2 className="heading">PRODUCT QUALITY</h2>
            <div className="service_A service_display" >

                <div className="Pic_div left_push">
                    <img className="service_image" src={purple} alt="prod_qlty"/>
                </div>

                <div className="service_text reduce-W">
                    <ul>
                    <li>We pride in excellent product quality</li>
                    <li>TQMS and GMP used in product manufacturing processes</li>
                    <li>Long lasting recognisable and scintilating scents (forget me not)</li>
                    </ul>
                </div>

            </div>

            <h2 className="heading">CUSTOMIZED SERVICES</h2>
            <div className="service_B service_display" >

                <div className="Pic_div right_push">
                    <img className="service_image" src={delivery} alt="comp_servc"/>
                </div>
                <div className="service_text">
                    <ul>
                    <li>Product made to customer specifications</li>
                    <li>Easy of doing business</li>
                    <li>Quick delivery</li>
                    </ul>
                </div>

            </div>

            <h2 className="heading">COMPETITIVE PRICES</h2>
            <div className="service_C service_display" onVi>

                <div className="Pic_div left_push">
                    <img className="service_image" src={shopping} alt="comp_prc"/>
                </div>
                <div className="service_text">
                    <ul>
                    <li>Affordable prices</li>
                    <li>Free delivery on bulky orders</li>
                    <li>Flexible payment methods</li>
                    <li>Flexible payment terms</li>
                    </ul>
                </div>
              </div>

          </div>

          <div className="cta">
               <p>Enjoying our Services and Product ranges</p>
               <Link to="./products">
               <button className="products">Shop Now</button>
               </Link>
          </div>
            <div className="footer">
                <p> &copy; 2021 FEIRA GRANTE Pvt ltd </p>
            </div>
        </div>
    )
};
export default HomePage;