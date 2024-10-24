import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Импортируем useLocation и useNavigate
import "./style.scss";
import nft1 from "../../../assets/images/TrendingArt/nft1.png"
import richard from "../../../assets/images/LeaderBoardAva/Richard.png";
import michael from "../../../assets/images/LeaderBoardAva/Michael.png";

function FeaturedCard() {
    const location = useLocation(); // Получаем location
    const { product } = location.state; // Извлекаем переданный продукт
    const navigate = useNavigate(); // Инициализируем navigate

    const handleClose = () => {
        navigate('/'); // Возврат на главную страницу
    };

    return (
        <div className="FeaturedCard">
            <button className="close-button" onClick={handleClose}>✖</button>
            <div className="featured-nft-container">
                <div className="nft-left-container">
                    <img src={nft1} alt="" width="518" height="580" />
                </div>
                <div className="nft-right-container">
                    <div className="nft-right-titles">
                        <h1>{product.hedtitle}</h1>
                        <h6>{product.data}</h6>
                        <div className="nft-left-ava">
                            <div className="left">
                                <h6>{product.collection}</h6>
                                <div className="richard">
                                    <img src={richard} alt="" width="38.3" height="38.3" />
                                    <span>{product.name1}</span>
                                </div>
                            </div>
                            <div className="right">
                                <h6>{product.creator}</h6>
                                <div className="michael">
                                    <img src={michael} alt="" width="38.3" height="38.3" />
                                    <span>{product.name2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <h6>Description</h6>
                            <p>{product.descriptiontitle}</p>
                        </div>
                        <div className="nft-price">
                            <div>
                                <h6>{product.current}</h6>
                                <h5>🔥{product.money}</h5>
                            </div>
                            <div>
                                <h6>{product.end}</h6>
                                <h5>{product.hours}</h5>
                            </div>
                        </div>
                        <button className='btn' onClick={() => alert('Place Bid Clicked!')}>
                            <b>🔥Place Bid</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard;
