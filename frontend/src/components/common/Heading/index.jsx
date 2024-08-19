import "./style.scss"

function Heading() {
    return ( 
        <div className="heading-wrapper">
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, sed.</p>
        </div>
    );
}

export default Heading;