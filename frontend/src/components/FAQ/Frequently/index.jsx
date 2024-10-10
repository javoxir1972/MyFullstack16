import "./style.scss"

function Frequently() {
    return (
        <div className="frequently-wrapper">
            <div className="top">
                <h6>FAQ</h6>
                <h1>Frequently asked questions</h1>
                <p>Here, you'll find answers to the most commonly asked questions about our <br /> products, services, and policies.</p>
                <input type="text" placeholder="🔍  Search your ask" />
                <div className="buttons">
                    <button>General</button>
                    <button>NFT Product</button>
                    <button>Paymet</button>
                </div>
            </div>
            <div className="center">
                <button className="btn"></button>
                <div className="element"></div>
            </div>
        </div>
    );
}

export default Frequently;