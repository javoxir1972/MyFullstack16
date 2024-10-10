import { Link, NavLink } from "react-router-dom";
import "./style.scss"

function Nav() {
    return (
        <div className="nav">
            <div className="nav-left">
                <div>
                    <Link to={"/"}>
                        <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688346609_kartin-papik-pro-p-kartinki-krug-kvadrat-treugolnik-zvezda-45.jpg"
                            alt="" width="110px" height="40px" />
                    </Link>
                </div>
                <div>
                    <input type="text" placeholder="🔍   Search" />
                </div>
            </div>
            <div className="nav-right">
                <NavLink to="/" activeclassname="active">Explore</NavLink> 
                <NavLink to="Trending" activeclassname="active">Trending🔥</NavLink>
                <NavLink to="FAQ" activeclassname="active">FAQ</NavLink>
            </div>
        </div>
    );
}

export default Nav;