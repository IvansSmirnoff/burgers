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

export const isLogin = async () => {
	const dispatch = useDispatch();
	try {
	  const response = await fetchUser();
	  if (response && response.success) {
		dispatch({
			type: USER_AUTHED,
			payload: true
		});
	  } else {
		dispatch({
			type: USER_AUTHED,
			payload: false
		});
	  }
	} catch (error) {
	  console.error("Error checking login status:", error);
	  dispatch({
		type: USER_AUTHED,
		payload: false
	});
	}
  };
