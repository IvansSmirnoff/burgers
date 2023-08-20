import React from 'react';
import { useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { INGREDIENT_TYPES } from '../../const/main';

import styles from './burgeringredients.module.css';
import IngredientList from '../ingredients-list/ingredientslist';


function BurgerIngredients() {

    const ingredientMenuRef = useRef(null);

	const ref = {
		bun: useRef(null),
		sauce: useRef(null),
		main: useRef(null),
	}
	
	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	const {ingredients, loading, error} = useSelector(state => state.ingredients);

	const onTabClick = (type) => {
		setCurrent(type);
		ref[type].current.scrollIntoView({behavior:'smooth'});
	}

	const handleScroll = () => {
		const menuTop = ingredientMenuRef.current.getBoundingClientRect().top;

		const bunTop = Math.abs(ref.bun.current.getBoundingClientRect().top - menuTop);
		const sauceTop = Math.abs(ref.sauce.current.getBoundingClientRect().top - menuTop);
		const mainTop = Math.abs(ref.main.current.getBoundingClientRect().top - menuTop);
	
		if(bunTop < sauceTop){
			setCurrent(INGREDIENT_TYPES.BUN);
		}else if(sauceTop < mainTop){
			setCurrent(INGREDIENT_TYPES.SAUCE);
		}else{
			setCurrent(INGREDIENT_TYPES.MAIN);
		}

	}

    return (
        <div className={styles.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <section className={styles.ingredient_tabs}>
                <Tab value="one" active={current === INGREDIENT_TYPES.BUN} onClick={onTabClick}>
                    Булки
                </Tab>
                <Tab value="two" active={current === INGREDIENT_TYPES.SAUCE} onClick={onTabClick}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === INGREDIENT_TYPES.MAIN} onClick={onTabClick}>
                    Начинки
                </Tab>
            </section>

            <section className={styles.scrollzone} onScroll={handleScroll}>
                { loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
                { 
				ingredients && ingredients.length > 0 
				&& (
                    <>
                    <IngredientList listType={ 'bun' } ingredients={ ingredients } ref={ref.bun}/>
                    <IngredientList listType={ 'sauce' } ingredients={ ingredients } ref={ref.sauce}/>
                    <IngredientList listType={ 'main' } ingredients={ ingredients } ref={ref.main}/>
                    </>
                )}
            </section>

        </div>
    );
};

export default BurgerIngredients;
