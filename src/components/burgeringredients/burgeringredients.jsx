import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerIngredientsStyle from './burgeringredients.module.css';
import IngredientList from '../ingredients-list/ingredientslist';


function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={burgerIngredientsStyle.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <div className={burgerIngredientsStyle.ingredient_tabs}>
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

            <div className={burgerIngredientsStyle.scrollzone}>
                <IngredientList listType={'bun'}/>
                <IngredientList listType={'sauce'}/>
                <IngredientList listType={'main'}/>
            </div>

        </div>
    );
};

export default BurgerIngredients;
