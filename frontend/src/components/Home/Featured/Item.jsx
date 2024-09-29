function Item(props) {
    return (
        <div className="featured-nft-container">
            <div className="nft-left-container">
                <img src={props.imgs1} alt="" width="273px" height="334px" />
            </div>
            <div className="nft-right-container">
                <div className="nft-left-ava">
                    <img src={props.imgs2} alt="" width="38" height="38" />
                    <span>{props.titles}</span>
                </div>
                <div className="nft-right-titles">
                    <h1>{props.hedtitle}</h1>
                    <h6>{props.description}</h6>
                    <p>
                        {props.title1} <br />
                        {props.title2}
                    </p>

                    <div className="nft-price">
                        <div>
                            <h6>{props.leftcurrent}</h6>
                            <h5>🔥{props.leftnumber}</h5>
                        </div>
                        <div>
                            <h6>{props.rightcurrent}</h6>
                            <h5>{props.righttime}</h5>
                        </div>
                    </div>
                    <button className="btn">
                        <b>👁️  Place Bid</b>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Item;