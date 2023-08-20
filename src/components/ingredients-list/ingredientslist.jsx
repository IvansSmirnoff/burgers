import React from 'react';
import styles from './ingredientslist.module.css';

import { forwardRef } from 'react';
import Ingredient from '../ingredient/ingredient';

const IngredientList = forwardRef(({ ingredients, filter, title }, ref) => {
	return(
		<>
			<h2 ref={ref} className="text text_type_main-medium mb-6">{title}</h2>
			<ul className={styles.itemsSection}>
				{ 
				ingredients
				.filter( item => item.type === filter)
				.map( (ingredient, i) => 
				<Ingredient 
				key={ingredient._id} 
				ingredient={ingredient}
				/> ) 
				}
			</ul>
		</>
	)
});

export default IngredientList
