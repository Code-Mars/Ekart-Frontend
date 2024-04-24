import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
const Item = ({name, price,desc, ratings}) => {
    return <div className=" flex flex-col xsm-mx:w-[20%] xsm-mx:min-w-32 xs-mx:w-[20%] sm-mx:w-[25%] sm-mx:min-w-40 md-mx:w-[30%] md-mx:min-w-52 md:min-w-72 md:w-[23%] gap-1.5">
        <div className="bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
            <img className="cursor-pointer hover:scale-[1.2] transform transition-transform duration-[400ms]" src={`/Images/${name}.png`} />
            <div className=" cursor-pointer absolute md-mx:right-3 md-mx:top-3 md:right-5 md:top-5  transition duration-300 ease-in-out bg-white p-2 rounded-full hover:bg-red-100">
                <HeartIcon className="h-5 w-5" />
            </div>
        </div>
        <div className="flex justify-between xsm-mx:text-xs  sm-mx:text-sm md-mx:text-base md:text-lg font-semibold text-gray-700">
            <span >{name}</span>
            <span ><sup>$</sup>{price}<sup>.00</sup></span>
        </div>
        <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">{desc}</span>
        <div className="flex" >{
            [...Array(5)].map((e, i) => {
                if (i < ratings) return <StarIconSolid key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
                else return <StarIcon key={i} className=" xsm-mx:h-3  xsm-mx:w-3 h-4 text-green-500 w-4" />
            })
        }
            <span className="xsm-mx:text-[8px]/[10px] text-xs text-gray-500 font-semibold">(121)</span></div>
        <div className="flex justify-between">
            <button className="border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-white py-1.5 px-4 rounded-full transition duration-300 ease-in-out xsm-mx:text-[10px]/[12px] md-mx:text-xs md-mx:py-1 md-mx:px-2" >Add to Cart</button>
        </div>
    </div>
}
export default Item;