import React from 'react';
import styles from './Discount.module.scss';
import IconButton from '../../utils/buttons/iconbutton/IconButton';
import Background from '../../assets/images/discountsectionbackground.png';

const Discount = () => {

    const sectionBackground = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
    return (
        <div className={styles["discount"]} style={sectionBackground}>
            <div className={styles['discount__content']}>
                <h2 className={styles["discount__content--title"]}>20% DISCOUNT</h2>
                <p className={styles['discount__content--text']}>Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                </p>
            </div>
            <IconButton/>
        </div>
    )
}

export default Discount;