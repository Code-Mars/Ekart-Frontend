import Brand from "./Components/Brand";
import BrandList from "./Components/BrandList";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
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
import Payments from "./Components/Payments";
import Store from "./Components/Store";
import StoreList from "./Components/StoreList";
import TodayDeals from "./Components/TodayDeals";

export default function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Category/>
    <Deals/>
    <BrandList/>
    <DiscountList/>
    <TodayDeals/>
    <DebitCard/>
    <StoreList/>
    <HelpSection/>
    <hr className="mx-8 my-5 border-gray-400"/>
    <FooterLinks/>
    <hr className="mx-8 my-5 border-gray-400"/>
    <Footer/>
    </>
  )
}