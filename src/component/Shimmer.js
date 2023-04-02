import React from 'react';
import styles from '../styles/Shimmer.module.css';
export default function Shimmer () {
    return(
        <div className={styles.shimmerContainer}>
{/* Array(15):make array of 15 elements and fill(" "):alot them empty string s initial value */}
         {Array(9).fill(" ").map((elem)=> {
            return(
                <div className={styles.cardShimmer}>
                    <div className={styles.cardShimmerUp}></div>
                    <div className={styles.shimmerLineOne}></div>
                    <div className={styles.shimmerLineTwo}></div>
                    <div className={styles.shimmerLineThree}></div>
                </div>
            )
        })}   
        </div>
    )
}