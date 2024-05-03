import { Route, Router, Routes } from "react-router";
import Account from "./Components/Account";
import Brand from "./Components/Brand";
import BrandList from "./Components/BrandList";
import BuyNow from "./Components/BuyNow";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Cart from "./Components/Cart";
import Category from "./Components/Category";
import Deals from "./Components/Deals";
import DebitCard from "./Components/DebitCard";
import DiscountCard from "./Components/DiscountCard";
import DiscountList from "./Components/DiscountList";
import Footer from "./Components/Footer";
import FooterLinks from "./Components/FooterLinks";
import FtLink from "./Components/FtLink";
import Header from "./Components/Header";
import HelpCard from "./Components/HelpCard";
import HelpSection from "./Components/HelpSection";
import Item from "./Components/Item";
import Orders from "./Components/Orders";
import Payments from "./Components/Payments";
import Product from "./Components/Product";
import Search from "./Components/Search";
import Store from "./Components/Store";
import StoreList from "./Components/StoreList";
import TodayDeals from "./Components/TodayDeals";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/search/:search" element={<Search/>}/>
        <Route path="/buy" element={<BuyNow/>}/>
      </Routes>
      <hr className="mx-8 my-5 border-gray-400" />
      <Footer />
      <ScrollToTop/>
    </BrowserRouter>
  );
}