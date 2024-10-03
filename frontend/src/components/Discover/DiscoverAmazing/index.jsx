import "./style.scss"
import Item from "./item"
import DProductJSON from "../../../db/discover_product.json"
import Img1 from "../../../assets/images/7hokage.jpg"
import Img2 from "../../../assets/images/dam.jpg"
import Img3 from "../../../assets/images/narutokid.jpg"
import Img4 from "../../../assets/images/narutoandsuske.jpg"

function DiscoverAmazing(props) {
    let imgs1 = [Img1, Img2, Img3, Img4];
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