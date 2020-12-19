const CATEGORY_NAMES = ["shooter", "mmorpg", "mmofps", "pvp"]

async function getCategories() {
    let result = {}
    for (const name of CATEGORY_NAMES){
        const response = await fetch(`https://www.freetogame.com/api/games?category=${name}`);
        const responseJSON = await response.json()
        result[name] = responseJSON.slice(0,10);
    }
    return result;
}

export { getCategories }