import React from "react";
import "../styles/ContentModal.css";
import ImageSlider from "./ImageSlider";
import { connect } from "react-redux";

function ContentModal(props) {
    const data = props.gameData;
    if (props.selected){
        const screenshots = data.screenshots.map(obj => obj.image);
        return (
            <div>
                <div className="modal-bg" onClick={props.deselect}>
                </div>
                <div className="modal-container">
                    <div className="image-showcase">
                        <ImageSlider images={screenshots}/>
                    </div>
                    <div className="modal-lower">
                        <div className="info-container">
                            <h1>{data.title}</h1>
                            <p>Developer: {data.developer}</p>
                            <p>Publisher: {data.publisher}</p>
                            <p>Genre: {data.genre}</p>
                            <p>Released: {data.release_date}</p>
                            <br />
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className="modal-exit" onClick={props.deselect}>
                        X
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    deselect: () => dispatch({ type: "DESELECT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentModal);
