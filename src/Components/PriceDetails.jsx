import { Link } from "react-router-dom";

const PriceDetails=()=>{
    return <div className="flex flex-col gap-3  font-semibold">
        <div className="text-2xl">Price Details</div>
        <hr/>
        <div className=" flex justify-between">
            <span>Price (2 items)</span>
            <span>$999.00</span>
        </div>
        
        <div  className=" flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">-$99</span>
        </div>
        
        <div  className=" flex justify-between">
            <span>Delivery Charges</span>
            <span className=" text-green-600"><span className="text-gray-500 line-through">$2</span> Free</span>
        </div>
        <hr/>
        <div  className="font-bold flex justify-between">
            <span>Total Amount</span>
            <span>$900.00</span>
        </div>
        <hr/>
        <div className="text-green-600">You will save $99 on this order</div>
        <hr/>
        <Link to="/buy">
        <button  className="w-full border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none">Order Now</button>
        </Link>
    </div>

}
export default PriceDetails;