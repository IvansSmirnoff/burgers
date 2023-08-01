import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../appheader/appheader';
import BurgerConstructor from '../burgerconstructor/burgerconstructor';
import BurgerIngredients from '../burgeringredients/burgeringredients';


const Border = ({height,width}) => {
    return (
        <div style={{
            height: height,
            width: width
        }}/>
    );
}

class App extends React.Component {
  render() {
    return (
      <div className={appStyles.main_rect}>
        Привет, дорогой ревьюер! Это моя первая попытка взаимодействия с разметкой с нуля... Почти всю css я украл, и мне стыдно. Но я обязательно научусь
        <AppHeader />
        <main className={appStyles.main_columns}>
          <BurgerIngredients />
          <Border height={"40px"} width={"44px"}/>
          <BurgerConstructor />
        </main>
      </div>
    );
  }
}

export default App;
