import "./style.scss"
import nft1 from "../../../assets/images/Explore/nft1.jpg"

function UnclockUnique() {
    return (
        <div className="unclock">
            <div className="unclock-left">
                <h6>
                    WEB 3 NON-FUNGIBLE TOKENS
                </h6>
                <h1>
                    <span>Unclock Unique</span>
                    <span>Digitial Ownership</span>
                    <span>with NFTs</span>
                </h1>
                <h5>
                    <span>Experience the Revolutionary World of Non-Fungible</span>
                    <span>Tokens on Our Exclusive NFT Marketplace</span>
                </h5>
                <button>
                    🔥 Connect Wallet
                </button>
            </div>
            <div className="unclock-right">
                <img src={nft1} alt="" width="510px" height="535px" />
            </div>
        </div>
    );
}

export default UnclockUnique;