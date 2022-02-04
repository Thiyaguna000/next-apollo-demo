import React from "react";
import styles from "./card.module.css";
import { useState } from "react";

const Card = ({ data }) => {
    return(
    <>
        <div className={styles.dataContainer}>
            <h2>{data.name}</h2>
            <h2>{data.email}</h2>
            <h2>{data.address}</h2>
        </div>
    </>
        
    )
};

export default Card;