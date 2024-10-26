import "./style.scss";
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../../assets/images/TrendingArt/nft1.png"
import Img2 from "../../../assets/images/TrendingArt/nft2.png"
import Img3 from "../../../assets/images/TrendingArt/nft3.jpg"
import Img4 from "../../../assets/images/TrendingArt/nft4.jpg"
import avaimg1 from "../../../assets/images/LeaderBoardAva/Peperzone.png"
import avaimg2 from "../../../assets/images/LeaderBoardAva/Antonson.png"
import avaimg3 from "../../../assets/images/LeaderBoardAva/Richard.png"
import avaimg4 from "../../../assets/images/LeaderBoardAva/Michael.png"
import Item from "../../Home/Trending/item"
import TProductJSON from "../../../db/trending_product.json"

function Frequently() {
    const [visibleStates, setVisibleStates] = useState([false, false, false, false, false, false, false]); // Массив для видимости
    const [activeSection, setActiveSection] = useState('general'); // Хранит активный раздел
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleVisibility = (index) => {
        setVisibleStates((prev) =>
            prev.map((visible, i) => (i === index ? !visible : visible)) // Переключить видимость для конкретного индекса
        );
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setVisibleStates([false, false, false, false, false, false, false]); // Сбросить видимость при смене раздела
    };
    let imgs1 = [Img1, Img2, Img3, Img4];
    let imgs2 = [avaimg1, avaimg2, avaimg3, avaimg4];



    const handleNavigateToTrending = () => {
        navigate('/'); // Navigate to TrendingArt page
    };


    return (
        <div className="frequently-wrapper">
            <div className="top">
                <h6>FAQ</h6>
                <h1>Frequently asked questions</h1>
                <p>
                    Here, you'll find answers to the most commonly asked questions about our <br />
                    products, services, and policies.
                </p>
                <input type="text" placeholder="🔍  Search your ask" />
                <div className="buttons">
                    <button
                        onClick={() => handleSectionChange('general')}
                        style={{
                            backgroundColor: activeSection === 'general' ? '#FF56BB' : 'transparent',
                            color: activeSection === 'general' ? 'snow' : 'grey'
                        }}
                    >
                        General
                    </button>
                    <button
                        onClick={() => handleSectionChange('nft')}
                        style={{
                            backgroundColor: activeSection === 'nft' ? '#FF56BB' : 'transparent',
                            color: activeSection === 'nft' ? 'snow' : 'grey'
                        }}
                    >
                        NFT Product
                    </button>
                    <button
                        onClick={() => handleSectionChange('payment')}
                        style={{
                            backgroundColor: activeSection === 'payment' ? '#FF56BB' : 'transparent',
                            color: activeSection === 'payment' ? 'snow' : 'grey'
                        }}
                    >
                        Payment
                    </button>
                </div>
            </div>

            {/* General FAQs */}
            {activeSection === 'general' && (
                <div className="general">
                    {/* First FAQ */}
                    <div className="container">
                        <div>What is an NFT marketplace?</div>
                        <button onClick={() => toggleVisibility(0)} className="cursor">
                            {visibleStates[0] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[0] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            An NFT marketplace is a platform that allows users to buy, sell, and trade <br />
                            non-fungible tokens (NFTs). NFTs are unique digital assets that can represent <br />
                            anything from artwork and collectibles to in-game items and virtual real estate.
                        </p>
                    </div>

                    {/* Second FAQ */}
                    <div className="container">
                        <div>How does buying an NFT work?</div>
                        <button onClick={() => toggleVisibility(1)} className="cursor">
                            {visibleStates[1] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[1] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            Buying an NFT involves selecting a marketplace, setting up a digital <br />
                            wallet, purchasing cryptocurrency, and then either buying directly or bidding <br />
                            in an auction for the NFT you want.
                        </p>
                    </div>

                    {/* Third FAQ */}
                    <div className="container">
                        <div>What are the benefits of owning an NFT?</div>
                        <button onClick={() => toggleVisibility(2)} className="cursor">
                            {visibleStates[2] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[2] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            Owning an NFT can provide benefits like exclusive access to digital <br />
                            art, the potential for appreciation in value, and the ability to showcase <br />
                            your ownership of unique digital assets. Additionally, many creators offer <br />
                            perks such as access to events or additional content for NFT holders.
                        </p>
                    </div>

                    {/* Fourth FAQ */}
                    <div className="container">
                        <div>Are there any risks associated with buying NFTs?</div>
                        <button onClick={() => toggleVisibility(3)} className="cursor">
                            {visibleStates[3] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[3] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            Yes, there are risks involved in buying NFTs, including market <br />
                            volatility, potential scams, and the fact that NFTs can lose value. <br />
                            Additionally, you should consider the environmental impact of blockchain <br />
                            technology and gas fees associated with transactions.
                        </p>
                    </div>
                </div>
            )}

            {activeSection === 'nft' && (
                <div className="nft">
                    <div className="center-art" onClick={handleNavigateToTrending}>
                        {TProductJSON.map((product, index) => (
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
                        ))}
                    </div>
                </div>
            )}

            {/* Payment Section */}
            {activeSection === 'payment' && (
                <div className="payment">
                    <h1>Payment Information</h1>
                    <p>Please refer to the following FAQs for payment-related questions:</p>
                    <div className="container">
                        <div>What payment methods are accepted?</div>
                        <button onClick={() => toggleVisibility(4)} className="cursor">
                            {visibleStates[4] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[4] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            We accept various payment methods, including credit cards, debit cards, and cryptocurrency. Please check the specific marketplace for accepted currencies.
                        </p>
                    </div>

                    <div className="container">
                        <div>Are there any transaction fees?</div>
                        <button onClick={() => toggleVisibility(5)} className="cursor">
                            {visibleStates[5] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[5] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            Yes, there may be transaction fees involved when buying or selling NFTs, which can vary based on the marketplace and payment method used.
                        </p>
                    </div>

                    <div className="container">
                        <div>How long does it take for payments to process?</div>
                        <button onClick={() => toggleVisibility(6)} className="cursor">
                            {visibleStates[6] ? <GoArrowDown /> : <GoArrowRight />}
                        </button>
                    </div>
                    <div className={`text ${visibleStates[6] ? 'text-visible' : ''}`}>
                        <p className="containertext">
                            Payment processing times can vary based on the payment method used. Cryptocurrency transactions can take longer due to network congestion.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Frequently;





