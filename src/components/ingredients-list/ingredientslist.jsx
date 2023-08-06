import React from 'react';
import PropTypes from 'prop-types';

import ingredientsListStyle from './ingredientslist.module.css';
import Ingredient from '../ingredient/ingredient';
import data from '../../utils/data';

const typeNames = {
    'bun':'Булки',
    'sauce':'Соусы',
    'main':'Начинки'
};

const IngredientList = ({listType}) => {
  return (
    <>
      <p className="text text_type_main-medium">
        {typeNames[listType]}
      </p>
      <div className={ingredientsListStyle.ingredients_list}>
        {data.map((itm) => {
          return (itm.type === listType) ? (
            <Ingredient key={itm._id} image={itm.image} name={itm.name} price={itm.price}/>
          ) : null;
        })}
      </div>
    </>
  );
};

IngredientList.propTypes = {
  listType: PropTypes.oneOf(['bun', 'main', 'sauce']),
};

export default IngredientList;
