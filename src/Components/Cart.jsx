
import { useEffect } from "react";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const items = [
        { name: "AirPods Max",desc:"A perfect balance of high-fidelity audio", price: 559, ratings: 3, quantity:1},
        { name: "Instax mini 9",desc:"Selfie mode and selfie mirror, Macro mode", price:99, ratings:4, quantity:1},
    ]
    return <div className="flex p-3 justify-between md-mx:flex-wrap">

        <div className="md-mx:w-[95%] mx-auto w-[62%] p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
            <div className="text-2xl font-semibold">Cart Items</div>
            <hr/>
            {
                items.map((item, index) => {
                    return <CartItem key={index} name={item.name} desc={item.desc} price={item.price} ratings={item.ratings} quantity={item.quantity} />
            })
            }
        </div>
        <div className="md-mx:w-[95%] mx-auto w-[35%] h-fit py-3 px-5 m-2 border-[1px] border-gray-300 rounded-lg">
            <PriceDetails/>
        </div>
    </div>
}
export default Cart;