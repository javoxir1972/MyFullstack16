import "./style.scss"
import Item from "./item"
import TProductJSON from "../../../db/trending_product.json"
import Img1 from "../../../assets/images/7hokage.jpg"
import Img2 from "../../../assets/images/dam.jpg"
import Img3 from "../../../assets/images/narutokid.jpg"
import Img4 from "../../../assets/images/narutoandsuske.jpg"

function TrendingArt() {
    let imgs1 = [Img1, Img2, Img3, Img4];
    let imgs2 = [Img4, Img3, Img2, Img1];

    return (
        <div className="trending-art">
            <div className="header-art">
                <div className="header-art-left">
                    <div>Trending Art🔥</div>
                </div>
                <div className="header-art-right">
                    <div>Discover more</div>
                </div>
            </div>

            <div className="center-art">
                {
                    TProductJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <Item
                                    img1={imgs1[product.id % imgs1.length]}
                                    hedtitle={product.hedtitle}
                                    img2={imgs2[product.id % imgs2.length]}
                                    avatitle={product.avatitle}
                                    current={product.current}
                                    number={product.number}
                                />

                            </div>
                        )
                    })
                }
                {/* <div className="nft-art">
                    <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                        alt="" width="267px" height="277px" />
                    <h4>Exboot #1</h4>
                    <div className="nft-art-bottom">
                        <div className="nft-art-bottom-left">
                            <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt=""
                                width="38px" height="38px" />
                            <p>Richard</p>
                        </div>
                        <div className="nft-art-bottom-right">
                            <div>
                                <h6>Current Bid</h6>
                            </div>
                            <div>
                                <h5>🔥3.421</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default TrendingArt;