import React, {useState} from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/proptypes'

import styles from './burgerconstructor.module.css';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/orderdetails';


function BurgerConstructor({ingredients}) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalClose = () => {
		setIsModalOpen(false);
	}
	const onOrderModalOpen = () => {
		setIsModalOpen(true);
	}

    const bun = ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1');
    const burgerContent = ingredients.filter((item) => (item.type === 'main' || item.type === 'sauce'))
    return (
        <div className={styles.column}>
            <div className={styles.header_box}/>

            {(bun)?
                <ConstructorElement
                    key={bun._id}
                    type="top"
                    isLocked={true}
                    text={bun.name+" (верх)"}
                    price={bun.price}
                    thumbnail={bun.image}
                /> : null}

            <div className={styles.column_list}>
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

            <div className={styles.total}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary"/>
                <Button type="primary" size="medium" onClick={onOrderModalOpen}> Оформить заказ </Button>
				{
					isModalOpen &&
					<Modal 
						header="" 
						onClose={handleModalClose}>
						<OrderDetails/>
					</Modal>
				}
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
	ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

export default BurgerConstructor;
