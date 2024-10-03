import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Home from "./Home"
import Discover from './Discover'
function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />}>
                {/* http://localhost:5173/ */}
                <Route index element={<Home />} />

                {/* http://localhost:5173/ */}
                <Route path="discover" element={<Discover />} />

                {/* http://localhost:5173/contact */}
                {/* <Route path="contacts" element={<Contacts />} /> */}
            </Route>
        </Routes>
    )
}

export default AllComponents;