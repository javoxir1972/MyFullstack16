import "./style.scss"
import Item from "./Item"
import EProductJSON from "../../../db/explore_product.json"
import Img1 from "../../../assets/images/7hokage.jpg"
import Img2 from "../../../assets/images/dam.jpg"
import Img3 from "../../../assets/images/narutokid.jpg"
import Img4 from "../../../assets/images/narutoandsuske.jpg"

function Explore() {
    let imgs1 = [Img1, Img2, Img3, Img4];
    let imgs2 = [Img4, Img3, Img2, Img1];

    return ( 
        <div className="explore-nft">
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

            <div className="nft">
                {
                    EProductJSON.map((product, index) => {
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
                    Discover More
                </button>
            </div>
        </div>
    );
}

export default Explore;