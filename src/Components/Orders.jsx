import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getOrders } from "../Services/CartService";
import { getItem } from "../Services/ItemService";

const Orders =()=>{
    const [orders, setOrders]=useState([]);
    useEffect(() => {
        getOrders(2).then(res=>{
            res.forEach(element => {
                getItem(element.itemId).then(item=>{
                    setOrders(prev=>[...prev, {...item, quantity:element.quantity, date:element.date, status:element.status}]);
                }).catch(error=>console.log(error));
            });
        }).catch(error=>{
            console.log(error);
          });

        window.scrollTo(0, 0);
      });
    return <div>
        
        <div className="md-mx:w-[95%] mx-auto w-[62%] p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
            <div className="text-2xl font-semibold">Orders</div>
            <hr/>
            { orders.length!==0 &&
                orders.map((e, i)=> <OrderItem key={i} title={e.title} desc={e.desc} price={e.price} rating={e.rating} quantity={e.quantity} date={e.date} status={e.status}/>)
           
            }
            {
                orders.length===0 && <div className="text-center text-lg">No Orders</div>
            }
        </div>
    </div>
}
export default Orders;