import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredientdetails';
import { SET_CURRENT_INGREDIENT, UNSET_CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';
import { DND_TYPES } from '../../const/main';

import { ingredientPropTypes } from '../../utils/proptypes';

import styles from './ingredient.module.css';

const Ingredient = ({ ingredient }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const getIngredients = (state) => ({
		constructorIngredients: state.constructorIngredients.ingredients,
		bun: state.constructorIngredients.bun
	});

	const { 
		constructorIngredients,
		bun
	 } = useSelector(getIngredients);

	const [ { opacity }, dragRef] = useDrag({
		type: DND_TYPES.INGREDIENT,
		item: ingredient,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	})

	const dispatch = useDispatch();

	let ingredientCount = constructorIngredients.filter(item => item._id === ingredient._id).length;
	if(bun && bun._id === ingredient._id){
		ingredientCount = 2;
	}

	const handleModalClose = () => {
		setIsModalOpen(false);
		dispatch({
			type: UNSET_CURRENT_INGREDIENT
		});
	}

	const handleModalOpen = () =>{
		dispatch({
			type: SET_CURRENT_INGREDIENT,
			payload: ingredient
		});
		setIsModalOpen(true);
	}

	return(
		<>
			<li 
			ref={dragRef}
			style={{opacity}}
			className={styles.container} 
			onClick={handleModalOpen}>
				<div draggable={false} className={styles.counter}>
					{
						ingredientCount > 0 &&
						<Counter count={ingredientCount} size="default" />
					}
				</div>
				<img src={ingredient.image} alt={ingredient.name} className="ml-4 mr-4 mb-1"/>
				<p className={styles.price}>
					<span className="text text_type_digits-default"> {ingredient.price} </span>
					<CurrencyIcon type="primary" />
				</p>
				<p className="text text_type_main-small">
					{ingredient.name}
				</p>
			</li>
			{
				isModalOpen &&
				<Modal 
					header="Детали ингредиента" 
					onClose={handleModalClose}>
					<IngredientDetails/>
				</Modal>
			}
		</>
	);
}

Ingredient.propTypes = {
	ingredient: ingredientPropTypes.isRequired
}

export default Ingredient;