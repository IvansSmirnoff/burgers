import React from 'react';
import styles from './app.module.css';

import AppHeader from '../appheader/appheader';
import BurgerConstructor from '../burgerconstructor/burgerconstructor';
import BurgerIngredients from '../burgeringredients/burgeringredients';


class App extends React.Component {
  render() {
    return (
      <div className={styles.main_rect}>
        Привет, дорогой ревьюер! Это моя первая попытка взаимодействия с разметкой с нуля... Почти всю css я украл, и мне стыдно. Но я обязательно научусь
        <AppHeader />
        <main className={styles.main_columns}>
          <BurgerIngredients />
          <div className={styles.main_border} />
          <BurgerConstructor />
        </main>
      </div>
    );
  }
}

export default App;
