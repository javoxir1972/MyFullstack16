import "./style.scss"

function Navbar() {
    return (
        <div className="main">
            <div className="navbar">
                <div className="navbar-left">
                    <div>
                        <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688346609_kartin-papik-pro-p-kartinki-krug-kvadrat-treugolnik-zvezda-45.jpg"
                            alt="" width="80px" height="40px" />
                    </div>
                    <div>
                        <input type="text" placeholder="🔍   Search" />
                    </div>
                </div>
                <div className="navbar-right">
                    <div>
                        <b>Explore</b>
                    </div>
                    <div>
                        <p>Trending🔥</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;