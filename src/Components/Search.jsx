import { useParams } from "react-router";
import Item from "./Item";
import { useEffect } from "react";

const Search=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const {search}=useParams();
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
    return <div className="py-5 px-5">
        <div className="text-xl font-semibold mb-5">Search Results for {search}</div>
        <div className="flex justify-evenly gap-4 pb-10 flex-wrap">
            {
                items.map((e) => <Item name={e.name} price={e.price} desc={e.desc} ratings={e.ratings} />)
            }
        </div>
    </div>
}
export default Search;