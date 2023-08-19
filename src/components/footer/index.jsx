import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <div className="footer__left">
                    <p className="footer__left--title">HomeDecor</p>
                    <p className="footer__left--copyright">©2022 All Right Reserved. Developed by Webcoder Agency</p>
                </div>
                <div className="footer__right">
                    <p className="footer__right--desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
                    <p className="footer__right--phone">+994 50 555 55 55</p>
                    <p className="footer__right--email">youremailhere@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;