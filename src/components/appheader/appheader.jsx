import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import appHeaderStyles from './appheader.module.css';

function AppHeader() {
  return (
      <div className={appHeaderStyles.app_header}>
          <menu className={appHeaderStyles.app_header_in}>

              <div className={appHeaderStyles.app_header_row}>
                  <BurgerIcon type="primary" />
                  Конструктор

                  <ListIcon type="primary" />
                  Лента Заказов
              </div>

              <Logo/>
              <div className={appHeaderStyles.app_header_row}>
              <ProfileIcon type="primary" />
                  Личный кабинет
              </div>
          </menu>
      </div>
  );
}

export default AppHeader;
