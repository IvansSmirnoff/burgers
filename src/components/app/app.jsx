import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useDispatch } from 'react-redux';

import AppHeader from '../appheader/appheader';
import BurgerConstructor from './../burger-constructor/burgerconstructor';
import BurgerIngredients from '../burger-ingredients/burgeringredients';
import { getIngredients } from '../../services/actions/get-ingredients';

import styles from './app.module.css';

function App() {

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getIngredients());
	}, [])

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients/> 
					<BurgerConstructor/> 
				</DndProvider>
			</main>
		</div>
	);
}

export default App;
