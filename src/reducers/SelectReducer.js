const INITIAL_STATE = { selected: false, gameData: null }

function selectReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SELECT":
            return { selected: true, gameData: action.data }
        case "DESELECT":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default selectReducer;