import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Success from "./Success";

const BuyNow = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const items = [
        { name: "AirPods Max",desc:"A perfect balance of high-fidelity audio", price: 559, ratings: 3, quantity:1},
        { name: "Instax mini 9",desc:"Selfie mode and selfie mirror, Macro mode", price:99, ratings:4, quantity:1},
    ]
    const [show, setShow] = useState(0);
    const [display, setDisplay]=useState(false);
    return <div className="flex flex-between flex-wrap">
        <div className="md-mx:w-[95%] mx-auto w-[62%]">
            <div className="p-3 m-2 border-[1px] border-gray-300 rounded-lg  flex flex-col gap-3">
                <div className="text-2xl font-semibold">Review Items</div>
                <hr />
                {
                items.map((item, index) => {
                    return <CartItem key={index} name={item.name} desc={item.desc} price={item.price} ratings={item.ratings} quantity={item.quantity} />
            })
            }

            </div>
            <div className="p-5 m-2 border-[1px] border-gray-300 text-sm rounded-lg  flex flex-col gap-4">
                <div className="text-2xl font-semibold">Delivery Information</div>
                <div className="flex justify-between">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border  w-[49%] border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border w-[49%] border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div >
                    <input
                        type="text"
                        placeholder="Address"
                        className="border w-full border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        type="text"
                        placeholder="City / Town"
                        className="border w-[49%] border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Zip Code"
                        pattern="[0-9]{6}"
                        className="border w-[49%] invalid:border-red-400 border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="border w-[49%] border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border w-[49%] border-gray-300 rounded-md px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
        <div className="md-mx:w-[95%] mx-auto w-[35%]">
            <div className="flex flex-col gap-4 h-fit py-3 px-5 m-2 border-[1px] border-gray-300 rounded-lg">
                <div className="text-2xl font-semibold">Order Summary</div>
                <hr />
                <div className="text-base font flex justify-between">
                    <span>Amount to be Paid:</span>
                    <span className="font-semibold">$999.00</span>
                </div>
                <hr />
                <div className="font-semibold">Payment Method</div>
                <hr />
                <div className="flex flex-col text-sm gap-3">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio text-blue-500 h-4 w-4"
                            name="paymentMethod"
                            value="cashOnDelivery"
                            defaultChecked={true}
                            onChange={() => setShow(0)}
                        />
                        <span className="ml-2">Cash on Delivery</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            className="form-radio text-blue-500 h-4 w-4"
                            name="paymentMethod"
                            value="upi"
                            onChange={() => setShow(1)}
                        />
                        <span className="ml-2">UPI</span>
                    </label>

                    <label className="inline-flex items-center ">
                        <input
                            type="radio"
                            className="form-radio text-blue-500 h-4 w-4"
                            name="paymentMethod"
                            value="creditDebitCard"
                            onChange={() => setShow(2)}
                        />
                        <span className="ml-2">Credit or Debit Card</span>
                    </label>
                </div>
                {show == 1 && <input
                    type="text"
                    placeholder="UPI Id"
                    className="border   border-gray-300 rounded-md text-sm px-3 py-1.5 focus:outline-none focus:border-blue-500 animate-[wiggle_0.7s_ease-in-out_1]  "
                />}
                {show == 2 &&
                    (<div className="gap-4 flex flex-col animate-[wiggle_0.7s_ease-in-out_1]"><input
                        type="text"
                        placeholder="Card Number"
                        pattern="[0-9]{16}"
                        className="border  border-gray-300 rounded-md text-sm px-3 py-1.5  focus:outline-none focus:border-blue-500"
                    />
                        <div className="flex justify-between">
                            <input
                                type="text"
                                placeholder="Expiry ( MM/YY )"
                                className="border w-[49%]  border-gray-300 rounded-md text-sm px-3 py-1.5  focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="CVV"
                                className="border w-[49%] border-gray-300 rounded-md text-sm px-3 py-1.5  focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Name on Card"
                            className="border  border-gray-300 rounded-md text-sm px-3 py-1.5 focus:outline-none focus:border-blue-500"
                        /></div>)
                }
                <button className="w-full border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none" onClick={()=>setDisplay(true)}>Place Order</button>
            </div>
        </div>

        {
            display && <Success/>
        }
    </div>
}
export default BuyNow;