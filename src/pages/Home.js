import React from "react"
import '../styles/Home.css';
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import ContentModal from "../components/ContentModal";
import CategorySlider from "../components/CategorySlider";
import { getCategories } from "../services"

const EMPTY_CATEGORIES = { 
    shooter: [],
    mmorpg: [],
    pvp: [],
    mmofps: []
}

function Home() {
    const [categoryData, setCategoryData] = React.useState(EMPTY_CATEGORIES)

    React.useEffect(() => {
        async function fetchCategory() {
            const categories = await getCategories();
            console.log(categories)
            setCategoryData(categories);
        }
        fetchCategory();
    }, [])

    return (
        <div className="Home">
            <Banner />
            <NavBar />
            <div className="content-body">
                <CategorySlider label={"Shooter"} items={categoryData.shooter}/>
                <CategorySlider label={"MMORPG"} items={categoryData.mmorpg}/>
                <CategorySlider label={"Player vs Player"} items={categoryData.pvp}/>
                <CategorySlider label={"MMOFPS"} items={categoryData.mmofps}/>
            </div>
            <ContentModal/>
        </div>
    );
}

export default Home;
