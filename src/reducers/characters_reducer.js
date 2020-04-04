import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import characters_json from '../data/characters.json';
import { createCharacter } from './helpers';

function characters(state = characters_json, action) {
	switch (action.type) {
		case ADD_CHARACTER:
			let characters = state.filter((item) => item.id !== action.id);
			return characters;
		case REMOVE_CHARACTER:
			let characters2 = [ ...state, createCharacter(action.id) ];
			return characters2;
		default:
			return state;
	}
}

export default characters;
