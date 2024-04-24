import { useState } from "react";
import Item from "./Item";

const TodayDeals = () => {
    const items = [
        { name: "Laptop sleeve MacBook",desc:"Organic Cotton, fairtrade certified", price: 59, ratings: 4 },
        { name: "AirPods Max",desc:"A perfect balance of high-fidelity audio", price: 559, ratings: 3 },
        { name:"Flower Laptop Sleeve",desc:"15 in. x 10 in. -Flap top closure", price :39, ratings:3},
        { name: "Supreme Water Bottle",desc:"1 Litre water bottle", price: 19, ratings: 2 },
        { name: "Macbook pro 13",desc:"256, 8 core GPU, 8 GB", price: 1099, ratings: 4 },
        { name: "HomePod mini",desc:"5 Colors Available", price: 239, ratings: 5 },
        { name: "Instax mini 9",desc:"Selfie mode and selfie mirror, Macro mode", price:99, ratings:4},
        { name: "Ipad Mini",desc:"Compact size and 5 colors available", price: 539, ratings: 5 },
    ]
    const [btn, setBtn] = useState(0);
    const category = ["Gadgets", "Fashion", "Toys", "Education", "Beauty", "Fitness", "Furniture", "Sneakers"];
    return <div className="p-5 w-full">
        <div className=" md:text-2xl lg:text-3xl mb-5 font-semibold">Today's Deals</div>
        <div className="flex gap-2 my-3 flex-wrap">
            {
                category.map((e, i) => { 
                    return <button key={i} className={`border focus:outline-none hover:border-blue-500 border-gray-500 text-gray-800 text-sm hover:bg-blue-500 hover:text-white ${btn===i?"bg-blue-500 text-white border-blue-500":"" }  py-1.5 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] md-mx:text-xs md-mx:py-1 md-mx:px-2`} onClick={()=>setBtn(i)}  >{e}</button> 
                })}
        </div>
        <div className="flex justify-evenly gap-4 pb-10 flex-wrap">
            {
                items.map((e) => <Item name={e.name} price={e.price} desc={e.desc} ratings={e.ratings} />)
            }
        </div>
    </div>
}
export default TodayDeals;