import { useParams } from "react-router";
import Item from "./Item";
import { useEffect, useState } from "react";
import { searchItems } from "../Services/ItemService";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [items, setItems]=useState([]);
    const { search } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(search);
        if(search==="")navigate("/");
        searchItems(search).then(res=>setItems(res)).catch(error=>console.log(error));
        window.scrollTo(0, 0);
        
    }, [search]);
    return <div className="py-5 px-5">
        <div className="text-xl font-semibold mb-5">Search Results for {search}</div>
        <div className="flex gap-4 pb-10 flex-wrap">
            {
                items.map((e, i) => <Item key={i} id={e.id} title={e.title} price={e.price} desc={e.desc} rating={e.rating} />)
            }
            {
                items.length===0 && <div className="text-center text-lg">No Items Found</div>
            }
        </div>
    </div>
}
export default Search;