import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredientdetails';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient.module.css';

const Ingredient = ({ ingredient }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalClose = () => {
		setIsModalOpen(false);
	}

	const handleModalOpen = () =>{
		setIsModalOpen(true);
	}

  return (
    <div className={styles.ingredient_some} onClick={handleModalOpen}>
      <img src={ingredient.image} alt={ingredient.name} />
      <span className={styles.price}>
        <span className={styles.currency}>{ingredient.price}</span> <CurrencyIcon type="primary" />
      </span>
      <span>{ingredient.name}</span>
      {
		isModalOpen &&
		<Modal 
			header="Детали ингредиента" 
			onClose={handleModalClose}>
			<IngredientDetails ingredient={ingredient}/>
		</Modal>
		}
    </div>
  );
};
  
Ingredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Ingredient;
