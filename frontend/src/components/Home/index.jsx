import "./style.scss"
import Heading from "../common/Heading"
import { FaHome } from "react-icons/fa";
import ImagePhone from "./ImagePhone";
import UnclockUnique from "./UnclockUnique";
import TrendingArt from "./Trending";
import FeaturedCollections from "./Featured";
import LeaderBoard from "./Leader";

function Home() {
    return (
        <div className="home-page-wrapper">
            <Heading title="Home" path="Home">
                <FaHome />
            </Heading>
            <UnclockUnique />
            <TrendingArt />
            <FeaturedCollections />
            <LeaderBoard />
            

            <ImagePhone />
        </div>
    );
}

export default Home;