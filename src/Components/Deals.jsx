import Item from "./Item";

const Deals =()=>{
    const items=[
        {name: "HomePod mini", price:239, ratings:5},
        {name: "Instax mini 9", price:99, ratings:4},
        {name: "Tot e Medium", price:239, ratings:3},
        {name: "Tomford Watch", price:87, ratings:2},
        {name: "Base Camp Duffel M", price:159, ratings:4},
        {name: "CosmicByte Headphone", price:239, ratings:5},
    ]
    return <div className="p-5 w-full">
        <div className=" md:text-2xl lg:text-3xl mb-5 font-semibold">Best Deals</div>
        <div className="flex gap-4 pb-10 overflow-x-scroll scrollbar" id="style-3">
            {
                items.map((e)=><Item name={e.name} price={e.price} ratings={e.ratings}/>)
            }
        </div>
    </div>
}
export default Deals;