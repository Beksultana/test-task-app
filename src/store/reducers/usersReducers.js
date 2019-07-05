import { FETCH_USERS_SUCCESS} from "../actions/ActionsType";

const initialState = {
    users: [],

};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {...state, users: action.users};
        default:
            return state;
    }
};

export default pokemonReducer;