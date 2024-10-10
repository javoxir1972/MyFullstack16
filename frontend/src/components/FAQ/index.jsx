import "./style.scss"
import Heading from "../common/Heading";
import Frequently from "./Frequently";

function FAQ(props) {
    return (
        <div className="faq-page-wrapper">
            <Heading title="Faq" path="Faq" >
            </Heading >
            <Frequently />

        </div>
    );
}

export default FAQ;