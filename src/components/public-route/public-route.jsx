import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute({redirectTo, ...props}){
	const {isAuth} = useSelector(state => state.user.isAuth)
	if(!isAuth){
		return <Route {...props} />
	}else{
		return <Redirect to={{ 
			pathname: redirectTo,
			state: { from: props.path }
		}}/>
	}
}

PublicRoute.propTypes = {
	redirectTo: PropTypes.string.isRequired
}