import "./style.scss"

function FeaturedCollections() {
    return (
        <div className="featured">
            <div className="featured-header">
                <h1>Featured Collections</h1>
            </div>
            <div className="featured-nft">
                <div className="featured-nft-left">
                    <div className="nft-left-img">
                        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                            alt="" width="260px" height="300px" />
                    </div>
                    <div className="nft-right">
                        <div className="nft-left-ava">
                            <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                                alt="" width="40" height="40" />
                            <h4>Peperzone</h4>
                        </div>
                        <h2>
                            Exboot #1
                        </h2>
                        <h6>
                            Description
                        </h6>
                        <p>
                            We would like to present you The <br />
                            Exboot 3D - Watching you~
                        </p>
                        <div className="nft-price">
                            <div>
                                <h6>Current Bid</h6>
                                <h5>🔥3.421</h5>
                            </div>
                            <div>
                                <h6>End in</h6>
                                <h5>1h 12m 14s</h5>
                            </div>
                        </div>
                        <button>
                            👁️  Place Bid
                        </button>
                    </div>

                </div>

                <div className="featured-nft-right">
                    <div className="nft-right-img">
                        <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                            alt="" width="260px" height="300px" />
                    </div>
                    <div className="nft-right">
                        <div className="nft-right-ava">
                            <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                                alt="" width="40" height="40" />
                            <h4>Peperzon</h4>
                        </div>
                        <h2>
                            Exboot #2
                        </h2>
                        <h6>
                            Description
                        </h6>
                        <p>
                            We would like to present you The
                            Exboot 3D - Watching you~
                        </p>
                        <div className="nft-price">
                            <div>
                                <h6>Current Bid</h6>
                                <h5>🔥3.421</h5>
                            </div>
                            <div>
                                <h6>Current Bid</h6>
                                <h5>1h 12m 14s</h5>
                            </div>
                        </div>

                        <button>
                            👁️  Place Bid
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FeaturedCollections;