import "./style.scss"
import ImagePhone from "./ImagePhone";
import UnclockUnique from "./UnclockUnique";
import TrendingArt from "./Trending";
import FeaturedCollections from "./Featured";
import LeaderBoard from "./Leader";
import Explore from "./Explore";

function Home() {
    return (
        <div className="home-page-wrapper">
            <UnclockUnique />
            <TrendingArt />
            <FeaturedCollections />
            <LeaderBoard />
            <Explore />
            <ImagePhone />
        </div>
    );
}

export default Home;