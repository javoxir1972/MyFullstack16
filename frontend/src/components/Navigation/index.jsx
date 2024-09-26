import "./style.scss"
import { Outlet } from 'react-router-dom'
import Footer from "../Navigation/Footer"
import Nav from "../Navigation/Nav"

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Navigation;