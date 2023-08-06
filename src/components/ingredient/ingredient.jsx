import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientStyle from './ingredient.module.css';

const Ingredient = ({ name, price, image }) => {
  return (
    <div className={ingredientStyle.ingredient_some}>
      <img src={image} alt={name} />
      <span className={ingredientStyle.price}>
        <span className={ingredientStyle.currency}>{price}</span> <CurrencyIcon type="primary" />
      </span>
      <span>{name}</span>
    </div>
  );
};
  
Ingredient.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Ingredient;
