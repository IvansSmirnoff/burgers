import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import burgerIngredientsStyle from './burgeringredients.module.css';
import data from '../../utils/data';

const typeNames = {
    'bun':'Булки',
    'sauce':'Соусы',
    'main':'Начинки'
};

const Product = ({ name, price, image }) => {
  return (
    <div className={burgerIngredientsStyle.product_some}>
      <img src={image} alt={name} />
      <span style={{ display: 'inline-flex' }}>
        <span style={{ marginRight: '8px' }}>{price}</span> <CurrencyIcon type="primary" />
      </span>
      <span>{name}</span>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

const ProductList = ({listType}) => {
  return (
    <>
      <p className="text text_type_main-medium">
        {typeNames[listType]}
      </p>
      <div className={burgerIngredientsStyle.product_list}>
        {data.map((itm) => {
          return (itm.type === listType) ? (
            <Product key={itm._id} image={itm.image} name={itm.name} price={itm.price}/>
          ) : null;
        })}
      </div>
    </>
  );
};

ProductList.propTypes = {
  listType: PropTypes.oneOf(['bun', 'main', 'sauce']),
};


function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={burgerIngredientsStyle.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <div style={{ display: 'flex' }}>
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
                <ProductList listType={'bun'}/>
                <ProductList listType={'sauce'}/>
                <ProductList listType={'main'}/>
            </div>

        </div>
    );
};

export default BurgerIngredients;
