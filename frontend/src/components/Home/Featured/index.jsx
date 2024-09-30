import "./style.scss"
import Item from "./Item"
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
                                <Item
                                    imgs1={imgs1[product.id % imgs1.length]}
                                    imgs2={imgs2[product.id % imgs2.length]}

                                    titles={product.titles}
                                    hedtitle={product.hedtitle}
                                    description={product.description}

                                    title1={product.title1}
                                    title2={product.title2}

                                    leftcurrent={product.leftcurrent}
                                    leftnumber={product.leftnumber}

                                    rightcurrent={product.rightcurrent}
                                    righttime={product.righttime}
                                />
                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
}

export default FeaturedCollections;