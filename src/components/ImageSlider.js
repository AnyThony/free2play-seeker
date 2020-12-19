import React from "react";
import "../styles/ImageSlider.css";

function ImageSlider(props) {
    const [index, setIndex] = React.useState(0);
    const { images } = props;

    function slideControl(direction) {
        const lastIndex = images.length - 1
        if (direction) { // slide left
            if (index == 0)
                setIndex(lastIndex);
            else
                setIndex(index - 1);
        }
        else { // slide right
            if (index == lastIndex)
                setIndex(0);
            else
                setIndex(index + 1);
        }
    }

    return (
        <div className="image-slider">
            <img src={images[index]} onClick={() => slideControl(true)}/>
            <div
                className="control slide-left"
                onClick={() => slideControl(true)}
            >
                <span>&lt;</span>
            </div>
            <div
                className="control slide-right"
                onClick={() => slideControl(false)}
            >
                <span>&gt;</span>
            </div>
        </div>
    );
}

export default ImageSlider;
