import { Link } from "react-router-dom";

export default function Home () {

    return (
        <>
            <div>Je suis la home</div>
            <Link to="/list">List</Link>
        </>
    )
}