import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Home from "./Home"
import Discover from './Discover'
import About from './About'
import Become from './Become'
import FAQ from './FAQ'
import FeaturedCollections from './Home/Featured'
import FeaturedCard from './Home/FeaturedCard/FeaturedCard'
import Explore from './Home/Explore'
import CreateNewNFT from './Home/CreatedNFT/Createnewnft'
import TrendingArt from './Home/Trending'
import Frequently from './FAQ/Frequently'
import Authentication from './Authentication'

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                {/* http://localhost:5173/ */}
                <Route index element={<Home />} />

                {/* http://localhost:5173/ */}
                <Route path="Discover" element={<Discover />} />

                {/* http://localhost:5173/ */}
                <Route path="About" element={<About />} />

                {/* http://localhost:5173/ */}
                <Route path="Become" element={<Become />} />

                {/* http://localhost:5173/ */}
                <Route path="Faq" element={<FAQ />} />

                <Route path="/" element={<FeaturedCollections />} />
                <Route path="/featured-card" element={<FeaturedCard />} />

                <Route path="/" element={<Explore />} />
                <Route path="/create-new-nft" element={<CreateNewNFT />} />

                <Route path="/" element={<TrendingArt />} />
                <Route path="/faq" element={<Frequently />} />

                <Route path="/login" element={<Authentication />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;