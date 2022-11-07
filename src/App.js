import Header from "./components/Header";
import AllProducts from "./components/Main/AllProducts";
import {Route,Routes} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Main/Register";
import Item from './components/Main/Item'
import Panier from './components/Main/Panier'
import {CartProvider} from 'react-use-cart'
import {ConnexionProvider, CheckoutProvider} from './components/Context'
import HomePage from "./components/Main/Home";
import Footer from './components/footer'
import Contact from "./components/Main/contact";
import Checkout from "./components/Main/checkout";

function App() {

  return (
    <div>
      <ConnexionProvider>
        <CheckoutProvider>
         <CartProvider>
                <Header />
                <Routes >
                  <Route path='/home' element={<AllProducts/>} />
                  <Route path='/Login' element = {<Login/>} />
                  <Route path='/Register' element = {<Register/>} />
                  <Route path = {'/Item/:idItem'} element = {<Item />} />
                  <Route path = {'/Panier'} element = {<Panier />} />
                  <Route path = '/' element = {<HomePage />} />
                  <Route path = '/contact' element = {<Contact />}/>
                  <Route path = '/Panier/checkout' element = {<Checkout />} />
                </Routes>
                <Footer /> 
          </CartProvider>
        </CheckoutProvider>
      </ConnexionProvider>
    </div>
  );
}

export default App;
