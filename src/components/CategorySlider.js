import { connect } from 'react-redux';
import '../styles/CategorySlider.css';
import { getGameById } from "../services";

async function selectItem(selectAction, id){
    const gameData = await getGameById(id);
    selectAction(gameData);
}

function SliderItem(props) {
    const { id } = props;
    const { select } = props;
    return (
        <div className="slide-item" onClick={() => selectItem(select, id)}>
            <div className="slide-bg">
                <img src={props.thumbnail} alt="..." />
            </div>
            <div className="slide-content">
                <h3 className="slide-title">{props.title}</h3>
                <p className="slide-desc">{props.short_description}</p>
            </div>
            <div className="container-gradient"></div>
        </div>
    )
}

function CategorySlider(props) {
    const select = props.select;
    return (
        <div>
            <h2 className="cat-title">{props.label}</h2>
            <div className="cat-slider">
                {
                    props.items.map((item, key) => (
                        SliderItem({ key, ...item, select })
                    ))
                }
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    select: (data) => dispatch({ type: "SELECT", data })
})

export default connect(null, mapDispatchToProps)(CategorySlider);
