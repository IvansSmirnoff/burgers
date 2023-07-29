import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../appHeader/appHeader';
import BurgerConstructor from '../burgerconstructor/burgerconstructor';
import BurgerIngredients from '../burgeringredients/burgeringredients';


class App extends React.Component {
  render() {
    return (
      <div className={appStyles.app}>
        <AppHeader />
        <BurgerConstructor />
        <BurgerIngredients />
      </div>
    );
  }
}

export default App;