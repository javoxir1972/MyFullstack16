import "./style.scss"
import DiscoverAmazing from "./DiscoverAmazing";
import ImagePhone from "../Home/ImagePhone"

function Discover(props) {
    return (
        <div className="discover-page-wrapper">
            <DiscoverAmazing />
            <ImagePhone />  

        </div>
    );
}

export default Discover;