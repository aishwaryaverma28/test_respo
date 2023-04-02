import React, { useEffect, useState } from 'react';
import Box from './Box';
import Shimmer from './Shimmer.js';
import styles from '../styles/Card.module.css';



export default function DataFetching() {
    const [data,setData] = useState([]);
    const url = "https://newapi-tcbs.onrender.com/singers";

    useEffect(()=>{
        getApiData(url);
    },[])

    async function getApiData(url){
        let data = await fetch(url);
        let result = await data.json();
        console.log(result);
        setData(result);
    }

    return data.length === 0 ? (
        <Shimmer />
      ) : 
    (
        <div className={styles.cardContainer}>
            {data.map((item) => <Box key={item.id} item={item} />)}
        </div>
    )
}