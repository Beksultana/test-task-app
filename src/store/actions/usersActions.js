import axios from '../../pokemon-api';
import { FETCH_USERS_SUCCESS} from "./ActionsType";

const fetchUsersSuccess = users => ({type: FETCH_USERS_SUCCESS, users});
// const fetchOnePokemonSuccess = onePokemon => ({type: FETCH_ONE_POKEMON_SUCCESS, onePokemon});

export const fetchUsers = () => {
    return dispatch => {
        return axios.get('/users').then(
            response => {
                dispatch(fetchUsersSuccess(response.data))
            }
        );
    };
};

