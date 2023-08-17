import PropTypes from 'prop-types';

import styles from './modaloverlay.module.css';

function ModalOverlay({ onClose }){
	return (
		<div className={styles.overlay} onClick={onClose}></div>
	)
};

ModalOverlay.propTypes = {
	onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
