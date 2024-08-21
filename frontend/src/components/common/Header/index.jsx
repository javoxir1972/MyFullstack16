import "./style.scss"

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h6>
                    WEB 3 NON-FUNGIBLE TOKENS
                </h6>
                <h1>
                    Unclock Unique
                    Digitial Ownership
                    with NFTs
                </h1>
                <h5>
                    Experience the Revolutionary World of Non-Fungible
                    Tokens on Our Exclusive NFT Marketplace
                </h5>
                <button>
                    🔥 Connect Wallet
                </button>
            </div>
            <div className="header-right">
                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" alt=""
                    width="320px" height="320px" />
            </div>
        </div>
    );
}

export default Header;
