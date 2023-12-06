import { setCookie, getCookie } from "./cookie";
import { fetchUser } from "./auth-api"

export const login = (refreshToken, accessToken) => {
    setCookie('token', refreshToken);
	setCookie('access_token', accessToken, {'max-age': 1500});
}

export const logout = () => {
	setCookie('token', null, {expires: -1});
	setCookie('access_token', null, {expires: -1});
}

export const isLogin = () => {
	return fetchUser()
	  .then(res => {
		return res && res.success;
	  })
	  .catch(error => {
		console.error("Error checking login status:", error);
		return false;
	  });
  };