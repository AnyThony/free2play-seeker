import React from "react"
import '../styles/Home.css';
import Banner from "../components/Banner";
import ContentModal from "../components/ContentModal";
import CategorySlider from "../components/CategorySlider";
import { getCategories } from "../services";
import { createStore } from "redux";
import selectReducer from "../reducers/SelectReducer";
import { Provider } from "react-redux";

const EMPTY_CATEGORIES = {
    shooter: [],
    mmorpg: [],
    pvp: [],
    mmofps: []
}

const selectStore = createStore(selectReducer)

function Home() {
    const [categoryData, setCategoryData] = React.useState(EMPTY_CATEGORIES)

    React.useEffect(() => {
        async function fetchCategory() {
            const categories = await getCategories();
            setCategoryData(categories);
        }
        fetchCategory();
    }, [])

    return (
        <div className="Home">
            <Banner />
            <Provider store={selectStore}>
                <div className="content-body">
                    <CategorySlider label={"Shooter"} items={categoryData.shooter} />
                    <CategorySlider label={"MMORPG"} items={categoryData.mmorpg} />
                    <CategorySlider label={"Player vs Player"} items={categoryData.pvp} />
                    <CategorySlider label={"MMOFPS"} items={categoryData.mmofps} />
                </div>
                <ContentModal />
            </Provider>
        </div>
    );
}

export default Home;
