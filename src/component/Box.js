import React,{ useState } from "react";
import styles from '../styles/Card.module.css';

function Box({ item }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Id, setId] = useState(0);
    const [select, toggleSelect] = useState(true);

    function handleClick(index, itemId) {
        setCurrentIndex(index);
        setId(itemId);
    }

    return (
        <div className ={styles.cardBox}>
            {currentIndex && (item.id === Id) ?  
                <img src={item.img[currentIndex]} alt="" className={styles.poster}/> :  
                <img src={item.poster_url} alt="" className={styles.poster}/>}
                <div className={styles.box_content}>
                    <div className={styles.box_desp}>
                        <h1>{item.card_name}</h1>
                        <p>Singer</p>
                    </div>
                    <p className={styles.box_location}>Location</p>
                    <div className={styles.box_booking}>
                        <p className={styles.booking_p}>Event Booking</p>
                        <p className={styles.booking_event}>{item.Event_booking}</p>
                    </div>
                    <div className={styles.subImages}>

                    {item.img.map((imgSrc,index)=>{
                        return(
                            <img src={imgSrc} alt="" onClick={()=>handleClick(index,item.id)} className={styles.smallImg}/>
                        )
                    })}
                    </div>
                    <div className={styles.selectBtn} onClick={() => toggleSelect(!select)}>{select?"Select" : "Selected"}</div>
                </div>
        </div>
    );
}


export default Box;