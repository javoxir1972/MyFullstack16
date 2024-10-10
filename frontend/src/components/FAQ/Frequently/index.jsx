import "./style.scss"
// const contentVue = document.querySelector(".element");
// let button = document.querySelector(".btn")

// button.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     contentVue.classList.toggle("element-hidden")
// })
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
                {/* <button className="btn">What is an NFT marketplace?</button> */}
                {/* <div className="element element-hidden">I don't now bro my names is chiki chiki sleym chedy</div> */}
            </div>
        </div>
    );
}

export default Frequently;