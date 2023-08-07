import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import PropTypes from 'prop-types';
import AppHeader from '../appheader/appheader'; 
import BurgerConstructor from '../burger-constructor/burgerconstructor';
import BurgerIngredients from '../burger-ingredients/burgeringredients';
import config from '../../config/api'

const api = {
	getIngredients: {
		url: config.url,
		options: {}
	}
}

function useData(request){
	const [data, setData] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const checkReponse = (res) => {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	  };

	function execute(){
			setLoading(true);
			setError(false);
			fetch(request.url, request.options)
			.then(checkReponse)
			.then(res => {
				setData(res.data);
				setError(false);
			})
			.catch(error => {
				console.log(error);
				setError(true);
			})
			.finally(() => setLoading(false));
	};

	return {
		data,
		loading,
		error,
		execute
	}
}

useData.propTypes = {
	request: PropTypes.shape({
		url: PropTypes.string.isRequired,
		options: PropTypes.shape({
			method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']),
			headers: PropTypes.oneOf([
				"'Content-Type': 'application/json'", 
				"'Content-Type': 'application/x-www-form-urlencoded'"]),
			body: PropTypes.string
		})
	}).isRequired
}

const App = () => {
  const { 
		data: ingredients, 
		loading, 
		error, 
		execute: executeIngredients 
	} = useData(api.getIngredients);

  useEffect(()=>{
		executeIngredients();
	}, []);

    return (
      <div className={styles.main_rect}>
        <AppHeader />
        <main className={styles.main_columns}>
          { loading && <p>Везём булки в ресторан. Ждите...</p> }
          { error && <p>Ошибка. Ваши булки в другом замке!</p> }
          { ingredients && <BurgerIngredients ingredients={ ingredients } /> }
          <div className={styles.main_border} />
          { ingredients && <BurgerConstructor ingredients={ ingredients } /> }
        </main>
      </div>
    );
  };

export default App;
