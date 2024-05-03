import { MinusIcon, PlusIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
import { useState } from "react";
const CartItem=({name, price, ratings, desc})=>{
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString('en-US', options);
    const [count, setCount] = useState(1);
    return <div className=" flex items-center">
    <div className="w-full flex p-2 gap-2 items-center justify-between">
        <div className="flex gap-3 items-center">
            <img className="w-36 rounded-md bg-gray-100 " src={`/Images/${name}.png`} />
            <div className="flex  flex-col gap-2 ">
                <span className="font-semibold text-xl ">{name}</span>
                <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">{desc}</span>
                <div className="flex" >{
                    [...Array(5)].map((e, i) => {
                        if (i < ratings) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                        else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                    })
                }
                </div>
                <span className="text-sm text-gray-700 font-semibold">Delivery by {formattedDate}</span>
            </div>
        </div>
        <div className="flex h-full flex-col items-center justify-between gap-3">
            <span className="text-lg text-gray-700 font-semibold">${price}.00</span>
            <div className="flex gap-4 rounded-xl text-sm font-semibold items-center px-3 py-1.5 bg-gray-100 w-fit"> <MinusIcon className="w-4 h-4 font-extrabold cursor-pointer text-red-500" onClick={() => setCount(Math.max(count - 1, 1))} /> <span>{count}</span> <PlusIcon className="cursor-pointer w-4 h-4 text-green-600" onClick={() => setCount(Math.min(count + 1, 10))} /> </div>
            <TrashIcon className="w-6 h-6 text-gray-600 hover:text-red-500 m-2 cursor-pointer" />
        </div>

    </div>
</div>
}
export default CartItem;