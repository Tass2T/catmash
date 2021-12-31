import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export default function List ({data}) {
    
    return (
        <div id="list-main">
            {data
            .sort((a,b) => a.vote > b.vote ? 1 : -1)
            .map((item, index) => 
        <div key={index} className="list_card">
            <div>{item.vote}</div>
            <img className='catImage' src={item.url} loading="lazy" alt="list of cat image"></img>
        </div>    
            )}
            <Link to="/">Retour</Link>
        
        </div>
    )
}