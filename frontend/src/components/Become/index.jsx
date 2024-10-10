import "./style.scss"
import Heading from "../common/Heading"
import BecomeArtist from "./BecomeArtist";

function Become(props) {
    return (
        <div className="become-page-wrapper">
            <Heading title="Become" path="Become">
            </Heading>
            <BecomeArtist />

        </div>

    );
}

export default Become;