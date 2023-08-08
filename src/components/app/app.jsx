import React from 'react';
import styles from './app.module.css';
import AppHeader from '../appheader/appheader'; 
import BurgerConstructor from '../burger-constructor/burgerconstructor';
import BurgerIngredients from '../burger-ingredients/burgeringredients';
import config from '../../config/api'

import useData from './hooks/usedata';

const api = {
	getIngredients: {
		url: `${config.url}/ingredients`,
		options: {}
	}
}

const App = () => {

  const { 
		data: ingredients, 
		loading, 
		error,
	} = useData(api.getIngredients);

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
