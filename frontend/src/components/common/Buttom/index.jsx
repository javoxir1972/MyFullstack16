import "./style.scss"
function Bottom() {
    return (
        <div className="bottom">
            <div className="image-phone">
                <div className="left">
                    <h1>
                        Try our App <br />
                        Mobile NFT
                    </h1>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                        Downloand Now
                    </button>
                </div>
                <div className="right">
                    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
                        alt="" width="400px" height="400px" />
                </div>
            </div>
            <div className="bottom-over">
                <div className="left">
                    <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688346609_kartin-papik-pro-p-kartinki-krug-kvadrat-treugolnik-zvezda-45.jpg"
                        alt="" width="80px" height="40px" />

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
                        <b>Company</b>
                        <br />
                        <br />
                        <h6>
                            Explore
                        </h6>
                        <br />
                        <h6>
                            About
                        </h6>
                    </div>
                    <div>
                        <b>Creator</b>
                        <br />
                        <br />
                        <h6>
                            FAQ
                        </h6>
                        <br />
                        <h6>
                            Become Artist
                        </h6>
                    </div>
                    <div>
                        <b>Join our community</b>
                        <br />
                        <br />
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
                    <span>
                        👁️
                    </span>
                    <span>
                        🌙
                    </span>
                    <span>
                        🔍
                    </span>
                    <span>
                        ⭕
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Bottom;


