import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burgeringredients.module.css';
import IngredientList from '../ingredients-list/ingredientslist';


function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={styles.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <div className={styles.ingredient_tabs}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={styles.scrollzone}>
                <IngredientList listType={'bun'}/>
                <IngredientList listType={'sauce'}/>
                <IngredientList listType={'main'}/>
            </div>

        </div>
    );
};

export default BurgerIngredients;
