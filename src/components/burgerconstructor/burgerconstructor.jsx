import React from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burgerconstructor.module.css';
import data from '../../utils/data';


function BurgerConstructor() {
    const bunUp = data.find(item => item._id === '60666c42cc7b410027a1a9b1');
    const bunDown = data.find(item => item._id === '60666c42cc7b410027a1a9b1');
    return (
        <div className={burgerConstructorStyles.column}>
            <div className={burgerConstructorStyles.header_box}/>

            {(bunUp)?
                <ConstructorElement
                    key={bunUp._id}
                    type="top"
                    isLocked={true}
                    text={bunUp.name+" (верх)"}
                    price={bunUp.price}
                    thumbnail={bunUp.image}
                /> : null}

            <div className={burgerConstructorStyles.column_list}>
                {data.map((itm) => {
                    return (itm.type === 'main' || itm.type === 'sauce') ?
                        <ConstructorElement
                            key={itm._id}
                            text={itm.name}
                            price={itm.price}
                            thumbnail={itm.image}
                        /> : null}
                    )
                }
            </div>

            {(bunDown)?
                <ConstructorElement
                    key={bunDown._id}
                    type="bottom"
                    isLocked={true}
                    text={bunDown.name+" (низ)"}
                    price={bunDown.price}
                    thumbnail={bunDown.image}
                /> : null}

            <div className={burgerConstructorStyles.total}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary"/>
                <Button type="primary" size="medium">Оформить заказ</Button>
            </div>
        </div>
    );
}

export default BurgerConstructor;
