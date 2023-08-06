import React from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import burgerConstructorStyles from './burgerconstructor.module.css';
import data from '../../utils/data';


function BurgerConstructor() {
    const bun = data.find(item => item._id === '60666c42cc7b410027a1a9b1');
    const burgerContent = data.filter((item) => (item.type === 'main' || item.type === 'sauce'))
    console.log(burgerContent)
    return (
        <div className={burgerConstructorStyles.column}>
            <div className={burgerConstructorStyles.header_box}/>

            {(bun)?
                <ConstructorElement
                    key={bun._id}
                    type="top"
                    isLocked={true}
                    text={bun.name+" (верх)"}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null}

            <div className={burgerConstructorStyles.column_list}>
                {burgerContent.map((itm) =>
                        <ConstructorElement
                            key={itm._id}
                            text={itm.name}
                            price={itm.price}
                            thumbnail={itm.image}
                        />
                    )
                }
            </div>

            {(bun)?
                <ConstructorElement
                    key={bun._id}
                    type="bottom"
                    isLocked={true}
                    text={bun.name+" (низ)"}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null}

            <div className={burgerConstructorStyles.total}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary"/>
                <Button type="primary" size="medium" htmlType='submit'>Оформить заказ</Button>
            </div>
        </div>
    );
}

export default BurgerConstructor;
