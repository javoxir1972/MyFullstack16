import "./style.scss"
import Item from "./item"
import TProductJSON from "../../../db/trending_product.json"

import Img1 from "../../../assets/images/TrendingArt/nft1.png"
import Img2 from "../../../assets/images/TrendingArt/nft2.png"
import Img3 from "../../../assets/images/TrendingArt/nft3.jpg"
import Img4 from "../../../assets/images/TrendingArt/nft4.jpg"

import avaimg1 from "../../../assets/images/LeaderBoardAva/Peperzone.png"
import avaimg2 from "../../../assets/images/LeaderBoardAva/Antonson.png"
import avaimg3 from "../../../assets/images/LeaderBoardAva/Richard.png"
import avaimg4 from "../../../assets/images/LeaderBoardAva/Michael.png"

function TrendingArt() {
    let imgs1 = [Img1, Img2, Img3, Img4];
    let imgs2 = [avaimg1, avaimg2, avaimg3, avaimg4];

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
            </div>
        </div>
    );
}

export default TrendingArt;