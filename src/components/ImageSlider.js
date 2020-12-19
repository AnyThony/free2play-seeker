import "../styles/ImageSlider.css";

function ImageSlider(props) {
    
    return (
        <div className="image-slider">
            <img src={props.images[0]}/>

        </div>
    );
}

export default ImageSlider;
