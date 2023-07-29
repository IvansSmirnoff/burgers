import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../appheader/appheader';
import BurgerConstructor from '../burgerconstructor/burgerconstructor';
import BurgerIngredients from '../burgeringredients/burgeringredients';

class App extends React.Component {
  render() {
    return (
      <div className={appStyles.app}>
        привет, мир. Ты работаешь?
        <AppHeader />
        <BurgerConstructor />
        <BurgerIngredients />
      </div>
    );
  }
}

export default App;