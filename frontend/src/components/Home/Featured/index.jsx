import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import "./style.scss";
import Item from "./Item";
import FProductJSON from "../../../db/featured_product.json";

import Img1 from "../../../assets/images/Explore/nft1.jpg";
import Img2 from "../../../assets/images/Explore/nft2.jpg";

import Imgava1 from "../../../assets/images/LeaderBoardAva/Antonson.png";
import Imgava2 from "../../../assets/images/LeaderBoardAva/Michael.png";

function FeaturedCollections() {
    const navigate = useNavigate(); // Инициализируем navigate
    const [selectedProduct, setSelectedProduct] = useState(null);

    const imgs1 = [Img1, Img2];
    const imgs2 = [Imgava1, Imgava2];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        navigate('/featured-card', { state: { product } }); // Переход на страницу FeaturedCard и передача выбранного продукта
    };

    return (
        <div className="featured">
            <div className="featured-header">
                <h1>Featured Collections</h1>
            </div>

            <div className="featured-nft">
                {FProductJSON.map((product) => (
                    <div key={product.id} onClick={() => handleProductClick(product)}>
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
                ))}
            </div>
        </div>
    );
}

export default FeaturedCollections;
