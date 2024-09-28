import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import ImagePhone from "./ImagePhone";
import UnclockUnique from "./UnclockUnique";
import TrendingArt from "./Trending";
import FeaturedCollections from "./Featured";
function Home() {
    return (
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>
            <UnclockUnique />
            <TrendingArt />
            <FeaturedCollections />

            <ImagePhone />
        </div>
    );
}

export default Home;