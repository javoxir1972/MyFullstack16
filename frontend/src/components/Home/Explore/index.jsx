import React from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import "./style.scss";
import Item from "./Item";
import EProductJSON from "../../../db/explore_product.json";

import Img1 from "../../../assets/images/Explore/nft1.jpg";
import Img2 from "../../../assets/images/Explore/nft2.jpg";
import Img3 from "../../../assets/images/Explore/nft3.jpg";
import Img4 from "../../../assets/images/Explore/nft4.jpg";
import Img5 from "../../../assets/images/Explore/nft5.jpg";
import Img6 from "../../../assets/images/Explore/nft6.jpg";
import Img7 from "../../../assets/images/Explore/nft7.jpg";
import Img8 from "../../../assets/images/Explore/nft8.jpg";
import Img9 from "../../../assets/images/Explore/nft9.jpg";
import Img10 from "../../../assets/images/Explore/nft10.jpg";
import Img11 from "../../../assets/images/Explore/nft11.jpg";
import Img12 from "../../../assets/images/Explore/nft12.jpg";

import Imgava1 from "../../../assets/images/Explore/nft1.jpg";
import Imgava2 from "../../../assets/images/Explore/nft2.jpg";
import Imgava3 from "../../../assets/images/Explore/nft3.jpg";
import Imgava4 from "../../../assets/images/Explore/nft4.jpg";

function Explore() {
    const navigate = useNavigate(); // Инициализируем navigate
    let imgs1 = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12];
    let imgs2 = [Imgava1, Imgava2, Imgava3, Imgava4];

    const handleRecentlyAddedClick = () => {
        navigate('/create-new-nft'); // Переход на страницу создания нового NFT
    };

    return (
        <div className="explore-nft">
            <div className="header-nft">
                <div className="left">
                    <h1>Explore</h1>
                </div>
                <div className="right">
                    <button onClick={handleRecentlyAddedClick}>Recently Added 🔥</button> {/* Обработчик клика */}
                </div>
            </div>

            <div className="nft">
                {EProductJSON.map((product, index) => (
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
                ))}
            </div>

            <div className="bottom-nft">
                <button>Discover More</button>
            </div>
        </div>
    );
}

export default Explore;
