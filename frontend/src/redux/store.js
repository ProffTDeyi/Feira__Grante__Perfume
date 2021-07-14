import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// _______####### Reducers ########______
import {cartReducer} from './reducers/cartReduucer';
import {getProductsReducer,getProductDetailsReducer} from './reducers/productReducer';


const reducer = combineReducers({
    cart:cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
})

const midddleware = [thunk];

const localStorageCartState =  localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INITIAL_CARTSTATE = {
    cart: {
        cartItems: localStorageCartState,
    }
}
const store = createStore(
    reducer,
    INITIAL_CARTSTATE,
    composeWithDevTools(applyMiddleware(...midddleware))
)

export default store;