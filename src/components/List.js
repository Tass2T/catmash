import { Link } from "react-router-dom";

export default function List ({data}) {

    return (
        <div id="list-main">
            {data
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