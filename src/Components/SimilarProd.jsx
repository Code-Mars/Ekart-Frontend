import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/20/solid";
const SimilarProd=({name, price, ratings})=>{
    
    return <div className="bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center  rounded-xl">
    <div className="flex p-2 gap-2 items-center">
        <img className="w-20 rounded-md bg-white" src={`/Images/${name}.png`} />
        <div className="flex w-36  flex-col gap-1">
            <span className="font-semibold ">{name}</span>
            <div className="flex" >{
                [...Array(5)].map((e, i) => {
                    if (i < ratings) return <StarIconSolid key={i} className=" xsm-mx:h-2  xsm-mx:w-2 h-3 text-green-500 w-3" />
                    else return <StarIcon key={i} className=" xsm-mx:h-2  xsm-mx:w-2 h-3 text-green-500 w-3" />
                })
            }
            </div>
            <span className="text-sm font-semibold">${price}.00</span>
        </div>
    </div>
</div>
}
export default SimilarProd;