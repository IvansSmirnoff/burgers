import config from '../../config/api'


export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const CLOSE_ORDER = 'CLOSE_ORDER';

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

export function fetchOrder(body){
	return fetch(`${config.url}/orders`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(checkResponse)
}

export function sendOrder(ingredientsIds){

	return function (dispatch){
		dispatch({
			type: SEND_ORDER
		})

		fetchOrder(JSON.stringify(ingredientsIds))
		.then(res => {
			if(res && res.success){
				dispatch({
					type: SEND_ORDER_SUCCESS,
					payload: res
				})
			}else{
				dispatch({
					type: SEND_ORDER_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: SEND_ORDER_FAILED
			})
		})
	}
}
