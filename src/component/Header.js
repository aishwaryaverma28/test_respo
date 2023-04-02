import React from "react";
import styles from "../styles/Header.module.css";

export default function Header () {
    return (
        <>
        <div className={styles.header_container}>
            <div className={styles.header_item}>
                <div className={styles.header_logo}>
                    <img className={styles.head_logo} src ="https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png" alt="img"/>
                    <p className={styles.head_title}>StarClinch</p>
                </div>
                <div className={styles.user}>
                    <p className={styles.user_name}>Hello Manish</p>
                </div>
                </div>

        </div>
        </>
    )
}