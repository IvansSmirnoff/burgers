import { useDispatch } from "react-redux";
import { setCookie } from "./cookie";

export const login = (refreshToken, accessToken) => {
	dispatch = useDispatch()
    setCookie('token', refreshToken);
	setCookie('access_token', accessToken, {'max-age': 1500});
	dispatch({
		type: USER_AUTHED
	})
}

export const logout = () => {
	setCookie('token', null, {expires: -1});
	setCookie('access_token', null, {expires: -1});
}
