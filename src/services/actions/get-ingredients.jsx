import { getData } from '../../utils/api';
import config from '../../config/api'
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export function getIngredients(){

	return function (dispatch){

		dispatch({
			type: GET_INGREDIENTS
		})

		getData(`${config.url}/ingredients`)
		.then(res => {
			if(res && res.success){
				dispatch({
					type: GET_INGREDIENTS_SUCCESS,
					ingredients: res.data
				})
			}else{
				dispatch({
					type: GET_INGREDIENTS_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: GET_INGREDIENTS_FAILED
			})
		})


	}
}
