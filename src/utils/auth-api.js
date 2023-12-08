import config from '../config/apiConfig';
import { getCookie, setCookie } from './cookie';

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const fetchWithRefresh = (fetchFunction) => {
	return fetchFunction().then((res) => {
		// я не нашёл, как выглядит ошибка при истечении токена, но логика примерно такая, кажется?
	  if (res.error && res.error === 'token_expired') {
		return refreshAccessToken().then(() => fetchFunction());
	  }
	  return res;
	});
  };

const refreshAccessToken = () => {
	const refreshToken = getCookie('refresh_token');
	const body = JSON.stringify({
		token: refreshToken,
	});

	return fetch(`${config.url}/auth/token`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		body: body,
		headers: {
		'Content-Type': 'application/json',
		},
	})
	.then(checkResponse)
	.then((data) => {
	setCookie('token', refreshToken);
	setCookie('access_token', accessToken, {'max-age': 1500});
	});
};

export function fetchLogin(body){
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/login`, 
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
	);
}

export function fetchRegister(body){
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/register`, 
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
	);
}

export function fetchLogout(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/logout`, 
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
	);
}

export function fetchToken(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/token`, 
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
	);
}

export function fetchUser(){
	const token = getCookie('access_token');
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/user`, 
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
		})
		.then(checkResponse)
	);
}

export function fetchUpdateUser(formData){
	const token = getCookie('access_token');
	const body = JSON.stringify(formData);
	return fetchWithRefresh(() =>
    fetch(`${config.url}/auth/user`, 
		{
			method: 'PATCH',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(checkResponse)
	);
}

export function sendResetEmail(body){
	return fetch(`${config.url}/password-reset`, 
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

export function passwordReset(body){
	return fetch(`${config.url}/password-reset/reset`, 
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