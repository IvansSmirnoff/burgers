import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './appheader.module.css';

function AppHeader() {
	return (
		<header className= { `${styles.header} p-4` } >
			<menu className={ `${styles.menu} container` }>
				<a href='#' className={ `${styles.btn} ${styles.active} p-5 mr-2` }>
					<BurgerIcon type="primary" />
					<span className='pl-2'>Конструктор</span>
				</a>
				<a href='#' className={ `${styles.btn} p-5` }>
					<ListIcon type="secondary" />
					<span className='pl-2'>Лента заказов</span>
				</a>
				<Logo />
				<a href='#' className={ `${styles.btn} p-5` }>
					<ProfileIcon type="secondary" />
					<span className='pl-2'>Личный кабинет</span> 
				</a>
			</menu>
		</header>
	);
}

export default AppHeader;
