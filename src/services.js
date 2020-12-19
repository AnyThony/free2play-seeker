import config from "./config.json";
import GamesByCategory from "./mock/GamesByCategory.json"
import GameById from "./mock/GamesById.json"

const CATEGORY_NAMES = ["shooter", "mmorpg", "mmofps", "pvp"];
const BASE_URI = "https://www.freetogame.com/api/games";

async function getCategories() {
    if (config.useMock) return GamesByCategory;

    let result = {}
    for (const name of CATEGORY_NAMES){
        const uri = `${BASE_URI}?category=${name}`
        const response = await fetch(uri);
        const responseJSON = await response.json()
        result[name] = responseJSON.slice(0,10);
    }
    return result;
}

async function getGameById(id){
    if (config.useMock) return GameById[id.toString()];

    const uri = `${BASE_URI}?id=${id}`;
    const response = await fetch(uri);
    return await response.json()
}

export { getCategories, getGameById }