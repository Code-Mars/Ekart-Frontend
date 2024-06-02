import { CheckIcon, HeartIcon, MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SimilarProd from "./SimilarProd";
import { getItem } from "../Services/ItemService";
import { addItem } from "../Slices/CartSlice";
import { useDispatch } from "react-redux";
const Product = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const [added, setAdded] = useState(false);
    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 4000);

    }
    useEffect(() => {
        getItem(id).then((res) => setProduct(res)).catch(error => console.log(error));
        window.scrollTo(0, 0);
    });

    const [count, setCount] = useState(1)
    const items = [
        { name: "Laptop sleeve MacBook", desc: "Organic Cotton, fairtrade certified", price: 59, ratings: 4 },
        { name: "AirPods Max", desc: "A perfect balance of high-fidelity audio", price: 559, ratings: 3 },
        { name: "Flower Laptop Sleeve", desc: "15 in. x 10 in. -Flap top closure", price: 39, ratings: 3 },
        { name: "Supreme Water Bottle", desc: "1 Litre water bottle", price: 19, ratings: 2 },
        { name: "Macbook pro 13", desc: "256, 8 core GPU, 8 GB", price: 1099, ratings: 4 },
        { name: "HomePod mini", desc: "5 Colors Available", price: 239, ratings: 5 },
        { name: "Instax mini 9", desc: "Selfie mode and selfie mirror, Macro mode", price: 99, ratings: 4 },
        { name: "Ipad Mini", desc: "Compact size and 5 colors available", price: 539, ratings: 5 },
    ]
    return <div className="my-5 md-mx:mx-5 mx-10 flex flex-wrap md-mx:gap-5 gap-12">
        <div className="relative w-fit h-fit bg-gray-100 rounded-xl flex items-center justify-center">
            <img className="" src={`/Images/${product.title}.png`} alt="img" />
            <div className=" cursor-pointer absolute md-mx:right-3 md-mx:top-3 md:right-5 md:top-5  transition duration-300 ease-in-out bg-white p-2 rounded-full hover:bg-red-100">
                <HeartIcon className="h-5 w-5" />
            </div>
        </div>
        <div className="flex max-w-[272px] flex-col gap-3">
            <span className="text-2xl font-bold">{product.title}</span>
            <span className="text-xs text-gray-600 font-semibold">{product.desc}</span>
            <div className="flex" >{
                [...Array(5)].map((e, i) => {
                    if (i < product.rating) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                    else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                })
            }
                <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">(121)</span>
            </div>
            <hr />
            <div className="flex flex-col">
                <span className="text-lg font-bold">${product.price}.00 or {(product.price / 6).toFixed()}.99/month</span>
                <span className=" text-xs text-gray-600 font-semibold">Suggested payment with 6 months special EMI</span>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
                <div className="flex gap-4 rounded-xl text-sm font-semibold items-center px-3 py-1.5 bg-gray-100 w-fit"> <MinusIcon className="w-4 h-4 font-extrabold cursor-pointer text-red-500" onClick={() => setCount(Math.max(count - 1, 1))} /> <span>{count}</span> <PlusIcon className="cursor-pointer w-4 h-4 text-green-600" onClick={() => setCount(Math.min(count + 1, 10))} /> </div>
                <span className="text-xs  text-gray-600 font-semibold"> Only <span className="text-orange-500">12 Items</span> Left!</span>
            </div>
            <hr />
            <div className="flex gap-2">
                <button className="border focus:outline-none  font-semibold border-blue-500 text-white bg-blue-500 text-sm hover:bg-blue-800  py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] " >Buy Now</button>

                {!added && <button onClick={() => { dispatch(addItem({ ...product, "quantity": count })); handleAdd() }} className="border focus:outline-none  font-semibold border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px]  " >Add to Cart</button>}
                {
                    added && <button className=" flex border border-green-500 text-green-500 text-sm focus:outline-none hover:bg-green-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] md-mx:text-xs md-mx:py-1 md-mx:px-2" ><CheckIcon className="font-extrabold w-5 h-5" /> Added</button>
                }
            </div>
        </div>
        <div className="md-mx:w-full w-[512px]">
            <div>
            <span className="text-lg font-semibold">Similar Products</span> 
            <button  className="ml-2 focus:outline-none text-[10px]/[12px] text-gray-400 font-bold">See All</button>
            </div>
            <div className=" flex flex-wrap gap-2 mt-4 justify-evenly">
                {

                    items.map((e, i) => i < 6 && <SimilarProd key={i} name={e.name} price={e.price} ratings={e.ratings} /> )
                }
            </div>
        </div>
    </div>
}
export default Product;