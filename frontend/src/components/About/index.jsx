import "./style.scss"
import Heading from "../common/Heading";
import AboutCompany from "./AboutCompany"

function About(props) {
    return (
        <div className="about-page-wrapper">
            <Heading title="About" path="About">
            </Heading>
            <AboutCompany />
        </div>
    );
}

export default About;