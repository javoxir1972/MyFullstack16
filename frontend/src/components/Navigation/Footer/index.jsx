import "./style.scss"
import { Link, NavLink } from "react-router-dom";

function Footer() {

    return (
        <div className="bottom">
            <div className="bottom-over">
                <div className="left">
                    <Link to={"/"}>
                        <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688346609_kartin-papik-pro-p-kartinki-krug-kvadrat-treugolnik-zvezda-45.jpg"
                            alt="" width="80px" height="40px" />
                    </Link>
                    <h1>NFT Distro</h1>
                    <h6>
                        Experience the Revolutionary World of Non-Fungible <br />
                        Tokens on Our Exclusive NFT Marketplace
                    </h6>
                    <div class="dark-theme">
                        <div>☀️</div>
                        <div class="perek">
                            <div class="soln"></div>
                        </div>
                        <div>🌙</div>
                    </div>

                </div>

                <div className="right">
                    <div>
                        <h4>Company</h4>
                        <NavLink to="Discover" activeclassname="active">Discover</NavLink>
                        <NavLink to="About" activeclassname="active">About</NavLink>
                    </div>
                    <div>
                        <h4>Creator</h4>
                        <NavLink to="FAQ" activeclassname="active">FAQ</NavLink>
                        <NavLink to="Become" activeclassname="active">Become Artist</NavLink>
                    </div>
                    <div>
                        <h4>Join our community</h4>
                        <input type="text" placeholder="Enter you email address" />
                    </div>
                </div>
            </div>
            <div className="icons">
                <div className="left">
                    <h6>
                        <span>C</span>Copyright NFT Distro 2023
                    </h6>
                </div>
                <div className="right">
                    <span>👁️</span>
                    <span>🌙</span>
                    <span>🔍</span>
                    <span>⭕</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;


