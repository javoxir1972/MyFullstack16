import React, { useState } from "react";
import "./style.scss";
import nft1 from "../../../assets/images/Explore/nft1.jpg";

function UnclockUnique() {
    const [isBlurred, setIsBlurred] = useState(false); // State to manage blur/modal

    const handleConnectWallet = () => {
        setIsBlurred(true); // Trigger blur and show modal on button click
    };

    const handleCloseModal = () => {
        setIsBlurred(false); // Remove blur and hide modal
    };

    return (
        <div className="unclock-wrapper">
            <div className={`unclock ${isBlurred ? "blurred" : ""}`}>
                <div className="unclock-left">
                    <h6>WEB 3 NON-FUNGIBLE TOKENS</h6>
                    <h1>
                        <span>Unclock Unique</span>
                        <span>Digital Ownership</span>
                        <span>with NFTs</span>
                    </h1>
                    <h5>
                        <span>Experience the Revolutionary World of Non-Fungible</span>
                        <span>Tokens on Our Exclusive NFT Marketplace</span>
                    </h5>
                    <button onClick={handleConnectWallet}>
                        🔥 Connect Wallet
                    </button>
                </div>
                <div className="unclock-right">
                    <img src={nft1} alt="" width="510px" height="535px" />
                </div>
            </div>

            {isBlurred && (
                <div className="modal-container">
                    <div className="modal">
                        <h6>Sign with your wallet!</h6>
                        <p>
                            Sign Wallet NFT, the secure digital storage for <br />
                            unique assets, take a step towards the future
                        </p>

                        <button className="pink" onClick={handleCloseModal}>Connect Wallet A</button>
                        <button className="blue" onClick={handleCloseModal}>Connect Wallet B</button>
                        <button className="green" onClick={handleCloseModal}>Connect Wallet C</button>
                        <span onClick={handleCloseModal}>&times; </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UnclockUnique;
