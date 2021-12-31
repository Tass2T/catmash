import { Link } from "react-router-dom";

export default function List ({data}) {

    return (
        <div id="list-main">
            <h1>Classement des chats!</h1>
            {data
            .map((item, index) => 
            <div key={index} className="list_card">
                <h2>{item.vote} { item.vote > 1? "votes !!" : "vote !"}</h2>
                <img className='catImage list_image' src={item.url} loading="lazy" alt="list of cat image"></img>
            </div>    
            )}
            <div class="back_link"><Link to="/">Retour aux votes</Link></div>
        
        </div>
    )
}