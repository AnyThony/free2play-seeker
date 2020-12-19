import '../styles/CategorySlider.css';

function SliderItem(props) {
    return (<div className="slide-item">
        <div className="slide-bg">
            <img src={props.thumbnail} />
        </div>
        <div className="slide-content">
            <h3 className="slide-title">{props.title}</h3>
            <p className="slide-desc">{props.short_description}</p>
        </div>
        <div className="container-gradient"></div>
    </div>)
}

function CategorySlider(props) {
    return (
        <div>
            <h2 className="cat-title">{props.label}</h2>
            <div className="cat-slider">
                {
                    props.items.map((item, index) => (
                        SliderItem({ key: index, ...item })
                    ))
                }
            </div>
        </div>
    );
}

export default CategorySlider;
