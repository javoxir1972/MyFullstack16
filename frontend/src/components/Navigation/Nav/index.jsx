import { Link } from "react-router-dom";

import "./style.scss"

function Nav() {
    return (
        <div className="nav">
            <div className="nav-left">
                <div>
                    <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688346609_kartin-papik-pro-p-kartinki-krug-kvadrat-treugolnik-zvezda-45.jpg"
                        alt="" width="110px" height="40px" />
                </div>
                <div>
                    <input type="text" placeholder="🔍   Search" />
                </div>
            </div>
            <div className="nav-right">
                <Link to="/" activeclassname="active">Explore</Link>
                <Link to="TrendingF" activeclassname="active">Trending🔥</Link>
                <Link to="FAQ" activeclassname="active">FAQ</Link>
            </div>
        </div>
    );
}

export default Nav;