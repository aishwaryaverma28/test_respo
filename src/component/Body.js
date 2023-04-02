import React from "react";
import Card from "./Card";
import styles from "../styles/Body.module.css";

function Body (){
return(
  <>
  <div className={styles.body_container}>
    <div className={styles.body}>
      <h1 className={styles.body_heading}>Shortlist</h1>
      <p className={styles.body_subHead}> Details:</p>
    </div>

    <div className={styles.body_section2}>
      <div className={styles.left}>
      <p className={styles.section2_lefthead}>Event Date</p>
      <p className={styles.section2_leftpara}>2023-02-22</p>
    </div>
    <div className={styles.left}>
      <p className={styles.section2_lefthead}>Location</p>
      <p className={styles.section2_leftpara}>Delhi, India</p>
    </div>
    <div className={styles.left}>
      <p className={styles.section2_lefthead}>Budget</p>
      <p className={styles.section2_leftpara}>Rs. 5,00,000</p>
    </div>
    </div>

    <div className={styles.body_center}>
      <h1 className={styles.center_heading}>Singer </h1>
      <p className={styles.center_para}>Select an artist that matches your vibe.</p>
    </div>
    <div>
      <Card/>
    </div>
  </div>
  </>
)
}

export default Body;