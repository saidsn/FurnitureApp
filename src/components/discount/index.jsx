import React from 'react';
import './Discount.scss';
import IconButton from '../../utils/buttons/iconbutton';
import Background from '../../assets/images/discountsectionbackground.png';

const Discount = () => {

    const sectionBackground = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
    return (
        <div className="discount" style={sectionBackground}>
            <div className='discount__content'>
                <h2 className="discount__content--title">20% DISCOUNT</h2>
                <p className='discount__content--text'>Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                </p>
            </div>
            <IconButton/>
        </div>
    )
}

export default Discount;