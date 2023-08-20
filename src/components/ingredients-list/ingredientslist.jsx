import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredientslist.module.css';
import Ingredient from '../ingredient/ingredient';

import { forwardRef } from 'react';


const typeNames = {
    'bun':'Булки',
    'sauce':'Соусы',
    'main':'Начинки'
};

const IngredientList = forwardRef(({ ingredients, listType }, ref) => {
  return (
    <>
      <p ref={ref} className="text text_type_main-medium">
        {typeNames[listType]}
      </p>
      <div className={styles.ingredients_list}>
      { 
				ingredients
				.filter( itm => itm.type === listType)
				.map( (ingredient, i) => 
				<Ingredient 
				key={ingredient._id} 
				ingredient={ingredient}
				/> ) 
				}
      </div>
    </>
  );
});

IngredientList.propTypes = {
  listType: PropTypes.oneOf(['bun', 'main', 'sauce']),
};

export default IngredientList;
