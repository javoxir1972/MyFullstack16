import "./style.scss"
import Item from "./item"
import DProductJSON from "../../../db/discover_product.json"

import Img1 from "../../../assets/images/Explore/nft1.jpg"
import Img2 from "../../../assets/images/Explore/nft2.jpg"
import Img3 from "../../../assets/images/Explore/nft3.jpg"
import Img4 from "../../../assets/images/Explore/nft4.jpg"
import Img5 from "../../../assets/images/Explore/nft5.jpg"
import Img6 from "../../../assets/images/Explore/nft6.jpg"
import Img7 from "../../../assets/images/Explore/nft7.jpg"
import Img8 from "../../../assets/images/Explore/nft8.jpg"
import Img9 from "../../../assets/images/Explore/nft9.jpg"
import Img10 from "../../../assets/images/Explore/nft10.jpg"
import Img11 from "../../../assets/images/Explore/nft11.jpg"
import Img12 from "../../../assets/images/Explore/nft12.jpg"

function DiscoverAmazing(props) {
    let imgs1 = [Img1, Img2, Img3, Img4, Img6, Img7, Img8, Img9, Img10, Img11, Img12];
    let imgs2 = [Img4, Img3, Img2, Img1];

    return (
        <div className="DiscoverAmazing-nft">
            <div className="title">
                <h1>Discover Amazing NFT's</h1>
                <input type="text" placeholder="🔍  Search" />
            </div>
            <div className="header-nft">
                <div className="left">
                    <h1>Explore</h1>
                </div>
                <div className="right">
                    <button>
                        Recently Added 🔥
                    </button>
                </div>
            </div>
            <div className="buttons">
                <button>NFT's</button>
                <button>Collections</button>
                <button>Series</button>
            </div>
            <div className="nft">
                {
                    DProductJSON.map((product, index) => {
                        return (
                            <div key={index}>
                                <Item
                                    imgs1={imgs1[product.id % imgs1.length]}
                                    title={product.title}
                                    imgs2={imgs2[product.id % imgs2.length]}
                                    name={product.name}
                                    current={product.current}
                                    number={product.number}
                                />
                            </div>
                        )
                    })
                }
            </div >

            <div className="bottom-nft">
                <button>
                    Load More
                </button>
            </div>
        </div>
    );
}

export default DiscoverAmazing;