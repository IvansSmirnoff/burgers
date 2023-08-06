import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient.module.css';

const Ingredient = ({ name, price, image }) => {
  return (
    <div className={styles.ingredient_some}>
      <img src={image} alt={name} />
      <span className={styles.price}>
        <span className={styles.currency}>{price}</span> <CurrencyIcon type="primary" />
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
