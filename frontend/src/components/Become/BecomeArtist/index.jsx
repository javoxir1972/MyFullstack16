import "./style.scss"
import nft1 from "../../../assets/images/Explore/nft1.jpg"
import nft2 from "../../../assets/images/Explore/nft2.jpg"
import nft3 from "../../../assets/images/Explore/nft3.jpg"
import nft4 from "../../../assets/images/Explore/nft4.jpg"

import nftava1 from "../../../assets/images/LeaderBoardAva/Antonson.png"
import nftava2 from "../../../assets/images/LeaderBoardAva/Michael.png"
import nftava3 from "../../../assets/images/LeaderBoardAva/Richard.png"
import nftava4 from "../../../assets/images/LeaderBoardAva/Peperzone.png"

function BecomeArtist(props) {
    return (
        <div className="becomeartist">
            <div className="become-header">
                <div className="left">
                    <div className="nft-container1">
                        <div className="img-wrapper">
                            <img src={nft1} alt="" width="267px" height="277px" />
                            <h4>Exboot #1</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava1} alt="" width="38px" height="38px" />
                                <p></p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Currrent Bid</h6>
                                </div>
                                <div>
                                    <h5>🔥3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nft-container2">
                        <div className="img-wrapper">
                            <img src={nft2} alt="" width="267px" height="277px" />
                            <h4>Exboot #2</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava2} alt="" width="38px" height="38px" />
                                <p></p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Currrent Bid</h6>
                                </div>
                                <div>
                                    <h5>🔥3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Become Artist</h1>
                <p>Welcome to the world of NFTs, Creator! We're excited to see your unique digital assets come to life. Create, share, and let your imagination run wild.</p>
                <button>Upload</button>
                <div className="right">
                    <div className="nft-container1">
                        <div className="img-wrapper">
                            <img src={nft3} alt="" width="267px" height="277px" />
                            <h4>Exboot #3</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava3} alt="" width="38px" height="38px" />
                                <p></p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Currrent Bid</h6>
                                </div>
                                <div>
                                    <h5>🔥3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nft-container2">
                        <div className="img-wrapper">
                            <img src={nft4} alt="" width="267px" height="277px" />
                            <h4>Exboot #4</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava4} alt="" width="38px" height="38px" />
                                <p></p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Currrent Bid</h6>
                                </div>
                                <div>
                                    <h5>🔥3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeArtist;