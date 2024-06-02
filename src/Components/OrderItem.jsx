import { MinusIcon, PlusIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { useState } from "react";
const OrderItem=({title, price, rating, desc, date,quantity, status})=>{
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + 5);

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('en-US', options);
    return <div className=" flex items-center">
    <div className="w-full flex p-2 gap-2 items-center justify-between">
        <div className="flex gap-3 items-center">
            <img className="w-36 rounded-md bg-gray-100 " src={`/Images/${title}.png`} />
            <div className="flex  flex-col gap-2 ">
                <span className="font-semibold text-xl ">{title}</span>
                <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">{desc}</span>
                <div className="flex" >{
                    [...Array(5)].map((e, i) => {
                        if (i < rating) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                        else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                    })
                }
                </div>
                <span className={`text-sm ${status==="Delivered"?"text-green-600":status==="Cancelled"?"text-red-600":"text-gray-700"}  font-semibold`}>{status==="Delivered"?"Delivered on":status==="Cancelled"?"Cancelled on":"Delivery by"} {formattedDate}</span>
            </div>
        </div>
        <div className="flex h-full flex-col items-center justify-between gap-3">
            <span className="text-lg text-gray-700 font-semibold">${price}.00</span>
            <div className="flex gap-4 rounded-xl text-sm font-semibold items-center px-3 py-1.5 bg-gray-100 w-fit"> Quantity: {quantity} </div>
            {status==="Ordered" && <button className="w-full  border border-red-500 text-red-500 text-sm hover:bg-red-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none" >Cancel</button>}
        </div>

    </div>
</div>
}
export default OrderItem;