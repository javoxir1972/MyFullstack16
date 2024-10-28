function Item(props) {
    return (
        <div className="nft-art">
            <img className="topimg" src={props.img1} width="267px" height="277px" />
            <h4>{props.hedtitle}</h4>
            <div className="nft-art-bottom">
                <div className="nft-art-bottom-left">
                    <img src={props.img2} width="38px" height="38px" />
                    <p>{props.avatitle}</p> 
                </div>
                <div className="nft-art-bottom-right">
                    <div>
                        <h6>{props.current}</h6>
                    </div>
                    <div>
                        <h5>🔥{props.number}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;