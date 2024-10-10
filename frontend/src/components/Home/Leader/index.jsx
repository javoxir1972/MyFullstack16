import "./style.scss"
import Item from "./Item"
import LProductJson from "../../../db/leaderboard_product.json"

import Img1 from "../../../assets/images/LeaderBoardAva/Peperzone.png"
import Img2 from "../../../assets/images/LeaderBoardAva/Richard.png"
import Img3 from "../../../assets/images/LeaderBoardAva/Anderson.png"
import Img4 from "../../../assets/images/LeaderBoardAva/Michael.png"
import Img5 from "../../../assets/images/LeaderBoardAva/Antonson.png"

function LeaderBoard() {
    let imgs = [Img1, Img2, Img3, Img4, Img5]
    return (
        <div className="leader">
            <div className="leader-board">
                <h1>Leaderboard of the Week</h1>
            </div>
            <div className="nft-images">
                {
                    LProductJson.map((product, index) => {
                        return (
                            <div key={index}>
                                <Item
                                    img={imgs[product.id % imgs.length]}
                                    title={product.title}
                                    number={product.number}
                                    titlenumber={product.titlenumber}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default LeaderBoard;