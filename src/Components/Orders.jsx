import { useEffect } from "react";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";

const Orders =()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const orders = [
        { name: "AirPods Max",desc:"A perfect balance of high-fidelity audio", price: 559, ratings: 3, quantity:1,date:new Date(2024, 4, 25), status:"Ordered"},
        { name: "Instax mini 9",desc:"Selfie mode and selfie mirror, Macro mode", price:99, ratings:4, quantity:1, date:new Date(2024, 3, 13), status:"Delivered"},
        { name: "Ipad Mini",desc:"Compact size and 5 colors available", price: 539, ratings: 5, quantity:1,date:new Date(2024, 2, 10), status:"Cancelled" },
    ]
    return <div>
        
        <div className="md-mx:w-[95%] mx-auto w-[62%] p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
            <div className="text-2xl font-semibold">Orders</div>
            <hr/>
            {
                orders.map((e, i)=> <OrderItem key={i} name={e.name} desc={e.desc} price={e.price} ratings={e.ratings} quantity={e.quantity} date={e.date} status={e.status}/>)
           
            }
        </div>
    </div>
}
export default Orders;