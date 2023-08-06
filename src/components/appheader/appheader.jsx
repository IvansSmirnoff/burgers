import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './appheader.module.css';

function AppHeader() {
  return (
      <div className={styles.app_header}>
          <menu className={styles.app_header_in}>

              <a className={styles.app_header_row}>
                  <BurgerIcon type="primary" />
                  Конструктор

                  <ListIcon type="primary" />
                  Лента Заказов
              </a>

              <Logo/>
              <a className={styles.app_header_row}>
              <ProfileIcon type="primary" />
                  Личный кабинет
              </a>
          </menu>
      </div>
  );
}

export default AppHeader;
