import React,{useEffect, useState} from 'react';
import './Footer.scss';
import axios from "axios";

const Footer = () => {

const url = "http://localhost:3000";

    const [footer, setFooter] = useState([]);

    const getFooter = async ()=>{
        await axios.get(`${url}/footer`).then((res)=>{
            setFooter(res.data);
        })
    };

    useEffect(()=>{
        getFooter();
    })


    return (
        <div className='container'>
            <div className="footer">
                <div className="footer__left">
                    <p className="footer__left--title">HomeDecor</p>
                    <p className="footer__left--copyright">©2022 All Right Reserved. Developed by Webcoder Agency</p>
                </div>
                <div className="footer__right">
                    <p className="footer__right--desc">{footer.description}</p>
                    <p className="footer__right--phone">{footer.phone}</p>
                    <p className="footer__right--email">{footer.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;