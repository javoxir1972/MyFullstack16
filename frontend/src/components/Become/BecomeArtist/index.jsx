import "./style.scss"
import nft1 from "../../../assets/images/Explore/nft1.jpg"
import nft2 from "../../../assets/images/Explore/nft2.jpg"
import nft3 from "../../../assets/images/Explore/nft3.jpg"
import nft4 from "../../../assets/images/Explore/nft4.jpg"

import nftava1 from "../../../assets/images/LeaderBoardAva/Antonson.png"
import nftava2 from "../../../assets/images/LeaderBoardAva/Michael.png"
import nftava3 from "../../../assets/images/LeaderBoardAva/Richard.png"
import nftava4 from "../../../assets/images/LeaderBoardAva/Peperzone.png"

import ava from "../../../assets/images/Naruto/narutokid.jpg"

function BecomeArtist(props) {
    return (
        <div className="becomeartist">
            <div className="become-header">
                <div className="left">
                    <div className="nft-container1">
                        <div className="img-wrapper">
                            <img src={nft1} alt="" width="192px" height="193px" />
                            <h4>Exboot #1</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava1} alt="" width="27px" height="27px" />
                                <p>Antonson</p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Current Bid</h6>
                                </div>
                                <div>
                                    <h5>3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nft-container2">
                        <div className="img-wrapper">
                            <img src={nft2} alt="" width="192px" height="193px" />
                            <h4>Exboot #2</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava2} alt="" width="27px" height="27px" />
                                <p>Richard</p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Current Bid</h6>
                                </div>
                                <div>
                                    <h5>3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Become Artist</h1>
                <p>Welcome to the world of NFTs, Creator! We're excited to see your unique <br /> digital assets come to life. Create, share, and let your imagination run wild.</p>
                <button>Upload</button>
                <div className="right">
                    <div className="nft-container3">
                        <div className="img-wrapper">
                            <img src={nft3} alt="" width="192px" height="193px" />
                            <h4>Exboot #3</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava3} alt="" width="27px" height="27px" />
                                <p>Michael</p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Current Bid</h6>
                                </div>
                                <div>
                                    <h5>3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nft-container4">
                        <div className="img-wrapper">
                            <img src={nft4} alt="" width="192px" height="193px" />
                            <h4>Exboot #4</h4>
                        </div>
                        <div className="nft-container-bottom">
                            <div className="nft-container-bottom-left">
                                <img src={nftava4} alt="" width="27px" height="27px" />
                                <p>Anderson</p>
                            </div>
                            <div className="nft-container-bottom-right">
                                <div>
                                    <h6>Current Bid</h6>
                                </div>
                                <div>
                                    <h5>3.421</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="become-center">
                <div className="become-top">
                    <div className="left">
                        <div>
                            <img src={ava} alt="" width="135px" height="135px" />
                            <h2>Create your nft</h2>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Create your NFT</h1>
                        <p>Use a program such as Adobe Photoshop, <br /> Illustrator, or Procreate to create a digital asset. <br /> Make sure the image is in a supported file <br /> format (e.g. JPEG, PNG, GIF).</p>
                        <button>Explore now</button>
                    </div>
                </div>
                <div className="become-center">
                    <div className="left">
                        <h1>Upload your NFT</h1>
                        <p>Once you've chosen a marketplace, sign up for <br /> an account and upload your NFT. You will likely <br /> need to provide a title, description, and tags for <br /> your asset, as well as set a price.</p>
                        <button>Explore now</button>
                    </div>
                    <div className="right">
                        <div>
                            <img src={ava} alt="" width="135px" height="135px" />
                            <h2>Upload your NFT</h2>
                        </div>
                    </div>
                </div>
                <div className="become-bottom">
                    <div className="left">
                        <div>
                            <img src={ava} alt="" width="135px" height="135px" />
                            <h2>Share your NFT</h2>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Share your NFT</h1>
                        <p>After your NFT is uploaded and for sale, share <br /> it on social media and other platforms to help <br /> promote it and attract buyers.</p>
                        <button>Explore now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BecomeArtist;