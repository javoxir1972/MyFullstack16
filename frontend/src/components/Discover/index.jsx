import "./style.scss"
import Heading from "../common/Heading"
import DiscoverAmazing from "./DiscoverAmazing";
import ImagePhone from "../Home/ImagePhone"

function Discover(props) {
    return (
        <div className="discover-page-wrapper">
            <Heading title="Discover" path="Discover">
            </Heading>
            <DiscoverAmazing />
            <ImagePhone /> 

        </div>
    );
}

export default Discover;