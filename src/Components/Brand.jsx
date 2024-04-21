const Brand =({name})=>{
    return <div className="cursor-pointer flex items-center gap-4 mb-2 hover:border-black border-[1px] bg-gray-100 max-w-72 p-4 rounded-lg">
        <img className="max-w-16 hover:scale-[1.2] transform transition-transform duration-[400ms]" src={`/Images/${name}.png`}/>
        <div className="flex flex-col gap-1">
            <div className="text-base font-semibold text-gray-800">{name}</div>
            <div className="text-xs text-gray-700">Delivery with in 24 hours</div>
        </div>
    </div>
}
export default Brand;