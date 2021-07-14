import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages
import  HomePage from './pages/HomePage';
import  ProductsPage from './pages/ProductsPage';
import  ProductPage from './pages/ProductPage';
import  CartPage from './pages/CartPage';
import  ContactPage from './pages/ContactPage';
import  AboutPage from './pages/AboutPage';


// Sections
import Navbar from './components/NavBar';
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDraw";

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show = {sideToggle}  click={() => setSideToggle(false)}/>
      <BackDrop show= {sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
        <Route exact path = '/' component= {HomePage}/>
        <Route exact path = '/products' component= {ProductsPage}/>
        <Route exact path = '/product/:id' component= {ProductPage}/>
        <Route exact path = '/cart' component= {CartPage}/>
        <Route exact path = '/contact' component= {ContactPage}/>
        <Route exact path = '/about' component= {AboutPage}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
