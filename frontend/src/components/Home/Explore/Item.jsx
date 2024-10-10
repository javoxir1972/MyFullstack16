function Item(props) {
    return (
        <div className="nft-container">
            <div className="img-wrapper">
                <img src={props.imgs1} alt="" width="267px" height="277px" />
                <h4>{props.title}</h4>
            </div>
            <div className="nft-container-bottom">
                <div className="nft-container-bottom-left">
                    <img src={props.imgs2} alt="" width="38px" height="38px" /> 
                    <p>{props.name}</p>
                </div>
                <div className="nft-container-bottom-right">
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