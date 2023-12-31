import { 
	ADD_INGREDIENT,
	ADD_BUN,
	COUNT_TOTAL_PRICE,
	REMOVE_INGREDIENT,
	SORT_INGREDIENT,
	CLEAN_BIN
} from './../actions/constructor-ingredients';

const initialState = { 
	ingredients: [],
	bun: null, 
	totalPrice: 0,
}

export const constructorIngredientsReducer = (state = initialState, action) =>{

	let newIngredients = state.ingredients;

	switch( action.type ){

		case ADD_INGREDIENT: {
			let newItem = action.payload;
			newIngredients = [ ...newIngredients, newItem ];
			return {
				...state,
				ingredients: newIngredients,
			}
		}

		case ADD_BUN: {
			let newItem = action.payload;
			return {
				...state,
				bun: newItem,
			}
		}

		case COUNT_TOTAL_PRICE: {
			let newTotalPrice = state.ingredients.reduce((price, currItem) => {
				return price + currItem.price
			}, 0);
			if(state.bun){
				newTotalPrice = newTotalPrice + 2*state.bun.price;
			}
			return {
				...state,
				totalPrice: newTotalPrice
			}
		}

		case REMOVE_INGREDIENT: {
			newIngredients = state.ingredients.filter((item) => item.unique_key_id !== action.payload)
			return {
				...state,
				ingredients: newIngredients
			}
		}
		
		case CLEAN_BIN: {
			return initialState
		}

		case SORT_INGREDIENT: {

			let temp = newIngredients[action.payload.hoverIndex];
			newIngredients[action.payload.hoverIndex] = newIngredients[action.payload.dragIndex];
			newIngredients[action.payload.dragIndex] = temp;

			return {
				...state,
				ingredients: newIngredients
			}
		}
		
		default: { 
			return state
		}
	}
};