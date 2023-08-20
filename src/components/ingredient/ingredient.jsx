import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient.module.css';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredientdetails';

import { SET_CURRENT_INGREDIENT, UNSET_CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';
import { DND_TYPES } from '../../const/main';


const Ingredient = ({ ingredient }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { constructorIngredients } = useSelector(state => ({
		constructorIngredients: state.constructorIngredients.ingredients
	}));
	const [ { opacity }, dragRef] = useDrag({
		type: DND_TYPES.INGREDIENT,
		item: ingredient,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	})

	const dispatch = useDispatch();

	let ingredientCount = constructorIngredients.filter(item => item._id === ingredient._id).length;
	if(ingredient.type === 'bun'){
		ingredientCount = 2 * ingredientCount;
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

  return (
	<>
    <li
	className={styles.ingredient_some}
	onClick={handleModalOpen}
	ref={dragRef}
	style={{opacity}}
	>
		<div 
		draggable={false}
		className={styles.counter}
		>
			{
				ingredientCount > 0 &&
				<Counter count={ingredientCount} size="default" />
			}
		</div>
      	<img src={ingredient.image} alt={ingredient.name} />
      	<span className={styles.price}>
        	<span className={styles.currency}>{ingredient.price}</span> 
			<CurrencyIcon type="primary" />
      	</span>
      <span>{ingredient.name}</span>
    </li>
	{
		isModalOpen &&
		<Modal 
			header="Детали ингредиента" 
			onClose={handleModalClose}>
			<IngredientDetails ingredient={ingredient}/>
		</Modal>
		}
	</>
  );
};
  
Ingredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Ingredient;
