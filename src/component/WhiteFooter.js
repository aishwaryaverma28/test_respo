import React from 'react';
import styles from '../styles/WhiteFooter.module.css';
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
import {  } from 'react-icons/fi';

export default function WhiteFooter() {
    return(
        <>
        <div className={styles.whiteFooter}>
            <div className={styles.footerContent}>
                <div className={styles.foot_top}>
                <div className={styles.footer_logo}>
                    <img className={styles.foot_logo} src ="https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png"/>
                    <p className={styles.foot_title}>StarClinch</p>
                </div>
                <div className={styles.foot_social}>
                <FaFacebook/>
                <FaTwitter/>
                <FaYoutube/>
                <FaInstagram/>
                </div>
                </div>
            </div>

            <div className={styles.foot_sec2}>
                <div className={styles.whiteFoot}>
                    <p className={styles.whiteFootHead}>FOR BUYERS</p>
                    <div className={styles.footerBuyer}>
                        <p className={styles.whiteFootblue}>Our Buyers</p>
                        <p className={styles.whiteFootblue}>Browse</p>
                        <p className={styles.whiteFootblue}>Post Your Requirement</p>
                        <p className={styles.whiteFootblue}>Entertainment on EMI</p>
                    </div>
                    <div>
                    <p className={styles.whiteFootHead}>ABOUT US</p>
                    <div className={styles.footerBuyer}>
                        <p className={styles.whiteFootblue}>Our Story</p>
                        <p className={styles.whiteFootblue}>Careers</p>
                    </div>
                    </div>
                </div>
                 <div>
                    <p className={styles.whiteFootHead}>FOR BUYERS</p>
                    <div className={styles.footerBuyer}>
                        <p className={styles.whiteFootblue}>Our Buyers</p>
                        <p className={styles.whiteFootblue}>Browse</p>
                        <p className={styles.whiteFootblue}>Post Your Requirement</p>
                        <p className={styles.whiteFootblue}>Entertainment on EMI</p>
                    </div>
                    <div>
                    <p className={styles.whiteFootHead}>ABOUT US</p>
                    <div className={styles.footerBuyer}>
                        <p className={styles.whiteFootblue}>Our Story</p>
                        <p className={styles.whiteFootblue}>Careers</p>
                    </div>
                    </div>
                </div>
                <div className={styles.whiteFootRight}>
                    <p className={styles.whiteFootHead}>REGISTERED OFFICE ADDRESS:</p>
                    <div className={styles.footerBuyer}>
                        <p className={styles.whiteFootblue}>VINSM Globe Private Limited 
                        Percept House, Ground Floor 
                        East of Kailash, New Delhi 
                        CIN: U52605DL2012PTC236944 
                        Phone: +91 11 498 498 01</p>
                        <p className={styles.whiteFootblue}>Contact Us</p>
                       
                    </div>
                    
                </div>
            
            </div>
            

            <div className={styles.lastSec}>
                <div className={styles.payment}>
                    <img src="https://verdant-biscuit-f278ad.netlify.app/payment.c2c1222d.png"/>
                </div>
                <p className={styles.lastLine}>© Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</p>
            </div>
            

            
        </div>
        </>
    );
}