import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import './list.css'

export default function List ({data}) {
    
    return (
        <div id="list-main">
            {data.map((item, index) => 
        
            <div key={index}>e</div>
            )}
            <Link to="/">Retour</Link>
        
        </div>
    )
}