import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient.module.css';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredientdetails';

const Ingredient = ({ ingredient }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalClose = () => {
		setIsModalOpen(false);
	}

	const handleModalOpen = () =>{
		setIsModalOpen(true);
	}

  return (
	<>
    <li className={styles.ingredient_some} onClick={handleModalOpen}>
      <img src={ingredient.image} alt={ingredient.name} />
      <span className={styles.price}>
        <span className={styles.currency}>{ingredient.price}</span> <CurrencyIcon type="primary" />
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
