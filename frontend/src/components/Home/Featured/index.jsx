import "./style.scss"
import FProductJSON from "../../../db/featured_product.json"
import Img1 from "../../../assets/images/7hokage.jpg"
import Img2 from "../../../assets/images/dam.jpg"
import Img3 from "../../../assets/images/narutokid.jpg"
import Img4 from "../../../assets/images/narutoandsuske.jpg"

function FeaturedCollections() {
    let imgs1 = [Img1, Img2, Img3, Img4];
    let imgs2 = [Img4, Img3, Img2, Img1];


    return (
        <div className="featured">
            <div className="featured-header">
                <h1>Featured Collections</h1>
            </div>
            <div className="featured-nft">
                {
                    FProductJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <div className="featured-nft-container">
                                    <div className="nft-left-container">
                                        <img src={product.img1} alt="" width="273px" height="334px" />
                                    </div>
                                    <div className="nft-right-container">
                                        <div className="nft-left-ava">
                                            <img src={product.img2} alt="" width="38" height="38" />
                                            <h4>{product.avatitle}</h4>
                                        </div>
                                        <div className="nft-right-titles">
                                            <h1>{product.hedtitle}</h1>

                                            <h6>{product.description}</h6>

                                            <p>
                                                {product.title1} <br />
                                                {product.title2}
                                            </p>

                                            <div className="nft-price">
                                                <div>
                                                    <h6>{product.leftcurrent}</h6>
                                                    <h5>🔥{product.leftnumber}</h5>
                                                </div>
                                                <div>
                                                    <h6>{product.rightcurrent}</h6>
                                                    <h5>{product.righttime}</h5>
                                                </div>
                                            </div>
                                            <button className="btn">
                                                <b>👁️  Place Bid</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
}

export default FeaturedCollections;