import { Route, Routes } from "react-router";
import Account from "./Components/Account";
import BuyNow from "./Components/BuyNow";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Orders from "./Components/Orders";
import Product from "./Components/Product";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from "./Components/LoginForm";

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter >
      <Header />
      <div className="min-h-[65vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/search/:search" element={<Search/>}/>
        <Route path="/search/" element={<Home/>}/>
        <Route path="/buy" element={<BuyNow/>}/>
        <Route path="/login" element={< LoginForm/>}/>
      </Routes>
      </div>
      <hr className="mx-8 my-5 border-gray-400" />
      <Footer />
      <ScrollToTop/>
    </BrowserRouter>
    </Provider>
  );
}